<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->foreignId('rented_by');
            $table->string('title');
            $table->text('description');
            $table->float('price_rent');
            $table->float('price_services')->nullable();
            $table->float('price_energies')->nullable();
            $table->float('deposit')->nullable();
            $table->date('available_from');
            $table->foreignId('address_id');
            $table->integer('number_of_bathrooms');
            $table->float('square_meters');
            $table->boolean('active');
            $table->boolean('pets_welcome');
            $table->boolean('paid_status');
            $table->date('listing_date');
            $table->tinyInteger('number_of_floors_building')->nullable();
            $table->tinyInteger('floor')->nullable();
            $table->foreignId('heating_id')->nullable();
            $table->foreignId('type_id');
            $table->foreignId('disposition_id');
            $table->foreignId('condition_id');
            $table->foreignId('construction_material_id')->nullable();
            $table->foreignId('energy_demand_id')->nullable();
            $table->foreignId('furnishing_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('properties');
    }
};
