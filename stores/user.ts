import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    count: 19,
    name: "",
    userData: "",
  }),
  actions: {
    async getUser() {
      const config = useRuntimeConfig();
      const apiUrl = config.public.baseUrl;
      const token = useCookie("token");
      const { data } = await useFetch(`${apiUrl}/user-detail`, {
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + token.value,
        },
        // onResponse({ request, response, options }) {
        //   if (response._data.success) {
        //     console.log(response._data);
        //     const name = response._data.data.first_name;
        //   }
        // },
        // onRequestError({ request, options, error }) {
        //   console.log(error);
        // },
      });
      if (data.value != null) {
        console.log(data.value.data.first_name);
        this.name = data.value.data.first_name;
      }

      //   this.userData = data.value.data;
    },
  },
});
