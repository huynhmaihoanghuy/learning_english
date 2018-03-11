<?php
namespace App\Models\Access\Vocabulary;

use Illuminate\Database\Eloquent\Model;

class Vocabulary extends Model
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
    protected $fillable = ['word', 'spelling', 'description', 'user_id', 'date', 'is_practiced'];

    /**
     * @param array $attributes
     */
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
        $this->table = config('access.vocabularies_table');
    }
}