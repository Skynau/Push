<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
  use HasFactory;

  public function type()
  {
    return $this->belongsTo(Type::class);
  }

  public function media()
  {
    return $this->hasMany(Media::class);
  }

  public function address()
  {
    return $this->belongsTo(Address::class);
  }

  public function condition()
  {
    return $this->belongsTo(Condition::class);
  }

  public function heating()
  {
    return $this->belongsTo(Heating::class);
  }

  public function furnishing()
  {
    return $this->belongsTo(Furnishing::class);
  }

  public function energy_demand()
  {
    return $this->belongsTo(Energy_demand::class);
  }

  public function disposition()
  {
    return $this->belongsTo(Disposition::class);
  }

  public function construction_material()
  {
    return $this->belongsTo(Construction_material::class);
  }

  public function amenities()
  {
    return $this->belongsToMany(Amenity::class);
  }

  public function favorite()
  {
    return $this->hasMany(Favorite_listing::class);
  }
}
