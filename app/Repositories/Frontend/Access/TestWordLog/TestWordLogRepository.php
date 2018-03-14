<?php
namespace App\Repositories\Frontend\Access\TestWordLog;


use App\Repositories\BaseRepository;
use App\Models\Access\TestWordLog\TestWordLog;

class TestWordLogRepository extends BaseRepository
{
    const MODEL = TestWordLog::class;

    /**
     * @param $data
     * @return string
     */
    public function createTestWordLogStub($data)
    {
        $model = self::MODEL;
        $model = new $model;

        $model->user_id = !empty($data['user_id']) ? $data['user_id'] : access()->user()->id;
        $model->date = date('Y-m-d');
        $model->word_id = $data['word_id'];
        $model->mean = $data['mean'];
        $model->status = !empty($data['status']) ? $data['status'] : 0;

        return $model;
    }

    /**
     * @param $data
     * @return array
     */
    public function create($data)
    {
        $createDate = $data['data'];
        $testWordLogModel = $this->createTestWordLogStub($createDate);

        try {
            $testWordLogModel->save();

            return [
                'result'    => 'ok',
                'status'    => 'success',
                'data'      => $testWordLogModel
            ];
        } catch (\Exception $exception) {
            return [
                'result'    => 'error',
                'status'    => 'error',
                'message'   => $exception->getMessage()
            ];
        }
    }
}