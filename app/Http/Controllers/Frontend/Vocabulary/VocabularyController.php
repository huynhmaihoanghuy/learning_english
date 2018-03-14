<?php
namespace App\Http\Controllers\Frontend\Vocabulary;

use App\Http\Controllers\Controller;
use App\Http\Requests\Frontend\Vocabulary\AddNewWordRequest;
use App\Http\Requests\Frontend\Vocabulary\RemoveWordRequest;
use App\Http\Requests\Frontend\Vocabulary\TestWordRequest;
use App\Repositories\Frontend\Access\TestWordLog\TestWordLogRepository;
use App\Repositories\Frontend\Access\Vocabulary\VocabularyRepository;
use Carbon\Carbon;
use Illuminate\Http\Request;
use JavaScript;

class VocabularyController extends Controller
{
    protected $vocabularyRepository;
    protected $testWordLogRepository;

    public function __construct(
        VocabularyRepository $vocabularyRepository,
        TestWordLogRepository $testWordLogRepository
    )
    {
        $this->vocabularyRepository = $vocabularyRepository;
        $this->testWordLogRepository = $testWordLogRepository;
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('frontend.vocabulary.index');
    }

    public function learn()
    {
//        $userId = access()->user()->id;
//        $vocabularyData = $this->vocabularyRepository->getVocabularyPracticeByUser($userId, '0');
//        if ($vocabularyData == null) {
//            return view('frontend.vocabulary.learn');
//        } else {
//            $date = date('m-d-Y', strtotime($vocabularyData->date));
//            return redirect()->route('frontend.vocabulary.practice', ['date' => $date]);
//        }

        return view('frontend.vocabulary.learn');
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
            JavaScript::put([
                'date_for_learn' => $date
            ]);

            return view('frontend.vocabulary.practice');
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updatePracticed(Request $request)
    {
        $requestData = $request->all();
        if (!empty($requestData['id'])) {
            $response = $this->vocabularyRepository->updatePracticed($requestData['id']);
            return response()->json($response);
        } else {
            return response()->json([
                'result'    => 'warning',
                'status'    => 'warning',
                'message'   => 'Cannot find id'
            ]);
        }
    }

    /**
     * @param $wordId
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function practiceAWord($wordId)
    {
        if(intval($wordId)) {
            $wordData = $this->vocabularyRepository->find(intval($wordId));
            if ($wordData != null) {
                JavaScript::put([
                    'wordData' => $wordData
                ]);

                return view('frontend.vocabulary.practice_a_new_word');
            } else {
                abort(404);
            }
        } else {
            abort(404);
        }
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function test()
    {
        return view('frontend.vocabulary.test');
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function getWordRandom()
    {
        $userId = access()->user()->id;
        $data = $this->vocabularyRepository->getRandomByUser($userId);

        return response()->json([
            'result'    => 'ok',
            'status'    => 'success',
            'data'      => $data
        ]);
    }

    /**
     * @param TestWordRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function testWord(TestWordRequest $request)
    {
        $requestData = $request->all();
        $response = $this->testWordLogRepository->create(['data' => $requestData]);
        return response()->json($response);
    }
}