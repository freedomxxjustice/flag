import React from "react";
import { useFlagStore } from "../store/useFlagStore";
import { FlagIcon, Weight, Tags, Image, PlusCircleIcon  } from "lucide-react";

function AddFlagModal() {
  const { addFlag, formData, setFormData, loading } = useFlagStore();

  return (
    <dialog id="add_flag_modal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">X</button>
        </form>

        <h3 className="font-bold text-xl mb-8">Add New Flag</h3>

        <form onSubmit={addFlag} className="space-y-6">
          <div className="grid gap-6">
            {/* name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">
                  Flag Name
                </span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                  <FlagIcon className="size-5" />
                </div>
                <input
                  type="text"
                  placeholder="Enter flag name"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
            </div>
            {/* description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">
                  Flag Description (Enter its location, tags, etc for filtering)
                </span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                  <Tags className="size-5" />
                </div>
                <input
                  type="text"
                  placeholder="Enter flag description / tags"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </div>
            </div>
            {/* image */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">
                  Flag Image
                </span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                  <Image className="size-5" />
                </div>
                <input
                  type="text"
                  placeholder="Enter flag image url, e. g. 'https://something.com/image.png'"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                />
              </div>
            </div>
            {/* difficulty */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">
                  Flag Difficulty
                </span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                  <Weight className="size-5" />
                </div>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                  value={formData.difficulty}
                  onChange={(e) =>
                    setFormData({ ...formData, difficulty: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-ghost">Cancel</button>
            </form>
            <button
              type="submit"
              className="btn btn-primary min-w-[120px]"
              disabled={!formData.name || !formData.description || !formData.image || loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm" />
              ) : (
                <>
                  <PlusCircleIcon className="size-5 mr-2" />
                  Add Flag
                </>
              )}
            </button>
          </div>

        </form>
      </div>



      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default AddFlagModal;
