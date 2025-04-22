import React from "react";
import { Link } from "react-router-dom";
import { EditIcon, Trash2Icon } from "lucide-react";
import { useFlagStore } from "../store/useFlagStore";

function FlagCard({ flag }) {
  const { deleteFlag } = useFlagStore();

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure className="relative pt-[56.25%]">
        <img
          src={flag.image}
          alt={flag.name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{flag.name}</h2>
        <div className="flex justify-center">
          {flag.description.split(",").map((description) => (
            <p className="text-lg text-primary">{description}</p>
          ))}
        </div>

        {/* Admin features */}

        <div className="card-actions justify-end mt-4">
          <Link
            to={`/flag/${flag.id}`}
            className="btn btn-sm btn-info btn-outline"
          >
            <EditIcon className="size-4" />
          </Link>
          <button
            className="btn btn-sm btn-error btn-outline"
            onClick={() => deleteFlag(flag.id)}
          >
            <Trash2Icon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FlagCard;
