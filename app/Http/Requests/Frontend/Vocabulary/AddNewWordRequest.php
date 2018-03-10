<?php
namespace App\Http\Requests\Frontend\Vocabulary;

use App\Http\Requests\Request;

class AddNewWordRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        if (isset(access()->user()->id)) {
            return true;
        }

        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'description'   => 'required',
            'word'          => 'required',
            'date'          => 'required'
        ];
    }
}