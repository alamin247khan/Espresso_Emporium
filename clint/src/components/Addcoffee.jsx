import React from 'react';
import Swal from 'sweetalert2';

export default function AddCoffee() {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, chef, supplier, taste, category, details, photo };
    console.log('New Coffee:', newCoffee);

    // send data to the server
    fetch('http://localhost/coffee', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(newCoffee)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Good job!',
            text: 'You clicked the button!',
            icon: 'success',
          });
        }
    })
  };

  return (
    <div className="min-h-screen bg-[#F4F3F0] p-8 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-[#F4F3F0] rounded-md">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#374151] drop-shadow">
          Add New Coffee
        </h2>
        <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        <form onSubmit={handleAddCoffee} className="space-y-4">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Chef</label>
              <input
                type="text"
                name="chef"
                placeholder="Enter coffee chef"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">Supplier</label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Taste</label>
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">Category</label>
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">Details</label>
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Photo */}
          <div>
            <label className="label">Photo</label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="btn w-full bg-[#D2B48C] text-[#331A15] hover:bg-[#c7a97c] border-none text-lg"
            >
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
