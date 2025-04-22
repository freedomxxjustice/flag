import { useEffect } from "react";
import { useFlagStore } from "../store/useFlagStore";
import FlagCard from "../components/FlagCard";
import AddFlagModal from "../components/AddFlagModal";
import { PackageIcon, PlusCircleIcon, RefreshCwIcon } from "lucide-react";

function HomePage() {
  const { flags, loading, error, fetchFlags } = useFlagStore();
  
  useEffect(() => {
    fetchFlags();
  }, [fetchFlags]);
  
  console.log(flags);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-center items-center mb-8 mt-10">
        <div className="mx-auto w-4xl h-4">
          <button className="btn">Play</button>
        </div>
      </div>
      <div className="flex justify-between flex-row pt-10 items-center mb-10">
        <div className="mx-auto w-4xl h-4">
          <button className="btn btn-primary" onClick={() => document.getElementById("add_flag_modal").showModal()}>
            <PlusCircleIcon className="size-5 mr-2" />
            Add Flag
          </button>
        </div>
        <div className="mx-auto w-4xl h-2">
          <h2 className="font-bold text-primary">All the flags we got!</h2>
        </div>
        <div className="mx-auto w-4xl h-4">
          <button className="btn btn-ghost btn-circle">
            <RefreshCwIcon className="size-5" />
          </button>
        </div>
      </div>

      <AddFlagModal />

      {error && <div className="alert alert-error mb-8">{error}</div>}

      {flags.length === 0 && !loading && (
        <div className="flex flex-col justify-center items-center h-96 space-y-4">
          <div className="bg-base-100 rounded-full p-6">
            <PackageIcon className="size-12" />
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-semibold ">No flags found</h3>
            <p className="text-gray-500 max-w-sm">
              Get started by adding your first flag to the library
            </p>
          </div>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loading loading-spinner loading-lg" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flags.map((flag) => (
            <FlagCard key={flag.id} flag={flag} />
          ))}
        </div>
      )}
    </main>
  );
}

export default HomePage;
