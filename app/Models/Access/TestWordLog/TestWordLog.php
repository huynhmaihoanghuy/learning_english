<?php
namespace App\Models\Access\TestWordLog;


use Illuminate\Database\Eloquent\Model;

class TestWordLog extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['user_id', 'date', 'word_id', 'mean', 'status'];

    /**
     * @param array $attributes
     */
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
        $this->table = config('access.test_word_logs_table');
    }
}