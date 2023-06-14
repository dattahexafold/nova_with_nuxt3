import { createStore } from "vuex";
// import bootstrap from "bootstrap/dist/js/bootstrap.min.js";

export const createStore=()=>({
  state: {
    hideConfigButton: false,
    isPinned: true,
    showConfig: false,
    isRTL: false,
    color: "",
    sidebarType: "bg-white",
    darkMode: false,
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    layout: "default",
    // bootstrap,
  },
});



 export const mutations=()=> {
    toggleConfigurator(state) =()=>{
      state.showConfig = !state.showConfig;
    }
  }

  export const  navbarMinimize=(state) =>{
      const sidenav_show = document.querySelector("#app");

      if (sidenav_show.classList.contains("g-sidenav-show") && sidenav_show.classList.contains("g-sidenav-hidden")) {
        sidenav_show.classList.add("g-sidenav-pinned");
        sidenav_show.classList.remove("g-sidenav-hidden");
        state.isPinned = true;
      } else if (sidenav_show.classList.contains("g-sidenav-show") && sidenav_show.classList.contains("g-sidenav-pinned")) {
        sidenav_show.classList.add("g-sidenav-hidden");
        sidenav_show.classList.remove("g-sidenav-pinned");
        state.isPinned = false;
      } else if (sidenav_show.classList.contains("g-sidenav-show") && window.innerWidth < 1200 ) {
        sidenav_show.classList.add("g-sidenav-pinned");
        state.isPinned = true;
      } else {
        sidenav_show.classList.add("g-sidenav-hidden");
        state.isPinned = true;
      }
    }


   export const setSidebarType=(state, payload) =>{
      state.sidebarType = payload;
    }


    export const navbarFixed=(state)=> {
      if (state.isNavFixed === false) {
        state.isNavFixed = true;
      } else {
        state.isNavFixed = false;
      }
    }

    export const toggleDefaultLayout=(state)=> {
      state.showNavbar = !state.showNavbar;
      state.showSidenav = !state.showSidenav;
      state.showFooter = !state.showFooter;
    }
  

 export const actions=()=> {
    return toggleSidebarColor=({ commit }, payload) =>{
      commit("setSidebarType", payload);
    }
  }


