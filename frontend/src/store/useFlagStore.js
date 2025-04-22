import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = import.meta.env.NODE === 'development' ? "http://localhost:3000" : "";
// const BASE_URL = "http://localhost:3000";

export const useFlagStore = create((set, get) => ({
  flags: [],
  loading: true,
  error: null,

  formData: {
    name: "",
    description: "",
    image: "",
    difficulty: "",
  },

  fetchFlags: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(`${BASE_URL}/api/flags`);
      set({ flags: response.data.data, error: null });
    } catch (err) {
      if (err.status == 429) set({ error: "Rate limit exceeded", flags: [] });
      else set({ error: "Something went wrong", flags: [] });
    } finally {
      set({ loading: false });
    }
  },

  deleteFlag: async (id) => {
    try {
      set({ loading: true });
      await axios.delete(`${BASE_URL}/api/flags/${id}`);
      set((prev) => ({ flags: prev.flags.filter((flag) => flag.id !== id) }));
      toast.success("Flag deleted successfully");
    } catch (err) {
      console.log("Error in deleteFlag function", error);
      toast.error("Something went wrong");
    }
  },

  setFormData: (formData) => set({ formData }),
  resetForm: () =>
    set({ formData: { name: "", description: "", image: "", difficulty: "" } }),

  addFlag: async (e) => {
    e.preventDefault();
    set({ loading: true });

    try {
      const { formData } = get();
      await axios.post(`${BASE_URL}/api/flags`, formData);
      await get().fetchFlags();
      get().resetForm();
      toast.success("Flag added successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      set({ loading: false });
    }
  },
}));
