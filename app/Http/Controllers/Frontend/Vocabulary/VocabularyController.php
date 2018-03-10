<?php
namespace App\Http\Controllers\Frontend\Vocabulary;

use App\Http\Controllers\Controller;
use App\Http\Requests\Frontend\Vocabulary\AddNewWordRequest;
use App\Http\Requests\Frontend\Vocabulary\RemoveWordRequest;
use App\Repositories\Frontend\Access\Vocabulary\VocabularyRepository;
use Carbon\Carbon;
use Illuminate\Http\Request;

class VocabularyController extends Controller
{
    protected $vocabularyRepository;

    public function __construct(
        VocabularyRepository $vocabularyRepository
    )
    {
        $this->vocabularyRepository = $vocabularyRepository;
    }

    public function index()
    {
        return view('frontend.vocabulary.index');
    }

    /**
     * @param AddNewWordRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function addNewWord(AddNewWordRequest $request)
    {
        $requestData = $request->all();
        $requestData['date'] = date('Y-m-d', strtotime($requestData['date']));
        $response = $this->vocabularyRepository->create(['data' => $requestData]);
        return response()->json($response);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getWordByDate(Request $request)
    {
        $requestData = $request->all();
        if (!empty($requestData['date'])) {
            $startDate = date('Y-m-d 00:00:00', strtotime($requestData['date']));
            $endDate = date('Y-m-d 23:59:59', strtotime($requestData['date']));
            $vocabularyByDate = $this->vocabularyRepository->getByDate($startDate, $endDate);

            return response()->json([
                'result'    => 'ok',
                'status'    => 'success',
                'data'      => $vocabularyByDate
            ]);
        } else {
            return response()->json([
                'result'    => 'warning',
                'status'    => 'warning',
                'message'   => 'Cannot find date'
            ]);
        }
    }

    /**
     * @param RemoveWordRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function removeWord(RemoveWordRequest $request)
    {
        $requestData = $request->all();
        $response = $this->vocabularyRepository->removeById($requestData['word_id']);
        return response()->json($response);
    }

    /**
     * @param $date
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function practiceWord($date)
    {
        if (strtotime($date) == false) {
            return redirect()->route('frontend.vocabulary.learn');
        } else {
            return view('frontend.vocabulary.practice');
        }
    }
}