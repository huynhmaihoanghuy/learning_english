<?php
namespace App\Repositories\Frontend\Access\Vocabulary;

use App\Models\Access\Vocabulary\Vocabulary;
use App\Repositories\BaseRepository;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Mockery\Exception;

class VocabularyRepository extends BaseRepository
{
    const MODEL = Vocabulary::class;

    /**
     * @param $data
     * @return array
     */
    public function create($data)
    {
        $createData = $data['data'];
        $vocabularyModel = $this->createVocabularyStub($createData);

        try {
            DB::transaction(function() use ($vocabularyModel) {
                $vocabularyModel->save();
            });
            return [
                'result'    => 'ok',
                'status'    => 'success',
                'data'      => $vocabularyModel
            ];
        } catch (Exception $exception) {
            Log::error($exception->getMessage());
            return [
                'result'    => 'error',
                'status'    => 'error',
                'message'   => 'Cannot save this word'
            ];
        }
    }

    /**
     * @param $data
     * @return string
     */
    protected function createVocabularyStub($data)
    {
        $model = self::MODEL;
        $model = new $model;

        $model->word        = $data['word'];
        $model->spelling    = isset($data['spelling']) ? $data['spelling'] : '';
        $model->description = $data['description'];
        $model->user_id     = isset($data['user_id']) ? $data['user_id'] : access()->user()->id;
        $model->date        = isset($data['date']) ? $data['date'] : null;

        return $model;
    }

    /**
     * @param $startDate
     * @param $endDate
     * @param null $userId
     * @return mixed
     */
    public function getByDate($startDate, $endDate, $userId = null)
    {
        return $this->query()
            ->whereBetween('date', [$startDate, $endDate])
            ->where('user_id', '=', isset($userId) ? intval($userId) : access()->user()->id)
            ->get();
    }

    /**
     * @param $wordId
     * @return array
     */
    public function removeById($wordId)
    {
        $vocabularyModel = $this->find($wordId);

        if ($vocabularyModel != null) {
            try {
                DB::transaction(function() use ($vocabularyModel) {
                    $vocabularyModel->delete();
                });

                return [
                    'result'    => 'ok',
                    'status'    => 'success'
                ];
            } catch (Exception $exception) {
                Log::error($exception->getMessage());
                return [
                    'result'    => 'error',
                    'status'    => 'error',
                    'message'   => 'Look like some thing went wrong!'
                ];
            }
        } else {
            return [
                'result'    => 'warning',
                'status'    => 'warning',
                'message'   => 'Cannot find word'
            ];
        }
    }

    /**
     * @param $id
     * @return array
     */
    public function updatePracticed($id)
    {
        $wordData = $this->find($id);
        if ($wordData != null) {
            $wordData->is_practiced = true;

            try {
                $wordData->save();

                return [
                    'result'    => 'ok',
                    'status'    => 'success'
                ];
            } catch (\Exception $exception) {
                return [
                    'result'    => 'error',
                    'status'    => 'error',
                    'message'   => $exception->getMessage()
                ];
            }

        } else {
            return [
                'result'    => 'error',
                'status'    => 'error',
                'message'   => 'Cannot find data'
            ];
        }
    }
}