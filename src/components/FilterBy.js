function FilterBy() {
    return (

    <div>
        <h3>Filter by</h3>
        <input type="radio" name="quote" id="quote"/>
        <label htmlFor="song">Quote</label>

        <input type="radio" name="length" id="length"/>
        <label htmlFor="artist">Length </label>


        <input type="text" />
      </div>
    );
}

export default FilterBy;