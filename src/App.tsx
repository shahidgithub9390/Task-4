import React, { useState } from 'react';

interface Category {
  id: number;
  name: string;
}

const categories: Category[] = [
  { id: 1, name: 'Technology' },
  { id: 2, name: 'Sports' },
  { id: 3, name: 'Music' },
  { id: 4, name: 'Art' },
  { id: 5, name: 'Fashion' },
];

const InteractiveButton = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Select a Category</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory?.id === category.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
            onClick={() => handleCategorySelect(category)}
          >
            {category.name}
          </button>
        ))}
      </div>
      {selectedCategory && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">You selected:</h3>
          <p className="text-lg">{selectedCategory.name}</p>
        </div>
      )}
    </div>
  );
};

export default InteractiveButton;