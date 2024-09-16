import React, { useEffect, useState } from 'react';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import image from '../assets/images/loading.png';
import AOS from 'aos';

const SearchExercises = () => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [allExercises, setAllExercises] = useState([]);
  const [displayedExercises, setDisplayedExercises] = useState([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState('');

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        setLoading(true);
        setError(null);

        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
        setBodyParts(bodyPartsData);

        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1300&offset=0', exerciseOptions);
        setAllExercises(exercisesData);

      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search.trim() === '' && selectedBodyPart === '') return;

    setLoading(true);
    setError(null);
    try {
      let filteredExercises = allExercises;

      if (selectedBodyPart) {
        filteredExercises = filteredExercises.filter(exercise => exercise.bodyPart === selectedBodyPart);
      }

      filteredExercises = filteredExercises.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search),
      );

      setSearch('');
      setDisplayedExercises(filteredExercises);
    } catch (err) {
      setError('Failed to fetch exercises');
    } finally {
      setLoading(false);
    }
  };

  const handleBodyPartClick = (bodyPart) => {
    setSelectedBodyPart(bodyPart);
    handleSearch();
  };

  useEffect(() => {
    AOS.init({
      duration: 1600,
      once: true,
    });
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
    AOS.refresh();
  }, []);

  return (
    <div className="text-center min-h-screen p-6 bg-black">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-8 text-white mt-12">
        Awesome Exercises You <br /> Should Know
      </h1>
      <div className="flex flex-col sm:flex-row justify-center mb-8">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          className="h-12 w-full sm:w-80 px-4 text-lg font-semibold border rounded-l-lg bg-gray-800 text-white shadow-md mb-2 sm:mb-0 sm:mr-2"
        />
        <button
          onClick={handleSearch}
          className="h-12 w-full sm:w-24 bg-yellow-600 text-white border-none rounded-r-lg text-lg font-semibold shadow-md"
        >
          Search
        </button>
      </div>
      {loading && <p className="text-white">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Filter by Body Part:</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {bodyParts.map((part) => (
            <button
              key={part}
              onClick={() => handleBodyPartClick(part)}
              className={`px-4 py-2 text-sm sm:text-lg font-semibold rounded-full transition-transform transform hover:scale-105 ${
                selectedBodyPart === part ? 'bg-yellow-600 text-white' : 'bg-gray-800 text-white border border-gray-600'
              }`}
            >
              {part}
            </button>
          ))}
        </div>
      </div>

      <div className="relative w-full p-6">
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : displayedExercises.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedExercises.map((exercise) => (
              <div key={exercise.id} className="bg-gray-800 p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <img
                  src={exercise.gifUrl}
                  alt={exercise.name}
                  className="w-full object-cover rounded-lg mb-4"
                />
                <h2 className="text-lg sm:text-xl font-bold mb-2 truncate text-white">{exercise.name}</h2>
                <p className="text-gray-400 mb-2">
                  <strong>Target:</strong> {exercise.target}
                </p>
                <p className="text-gray-400 mb-2">
                  <strong>Equipment:</strong> {exercise.equipment}
                </p>
                <div className="text-gray-400">
                  <strong>Instructions:</strong>
                  <ul className="list-disc list-inside mt-2">
                    {exercise.instructions.map((instruction, idx) => (
                      <li key={idx}>{instruction}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <img src={image} alt='No exercises found' className="w-3/4 sm:w-1/2 object-cover mb-4" />
            <p className="text-white">No exercises found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchExercises;