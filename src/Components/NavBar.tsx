import type { Component } from "solid-js";

const NavBar: Component = () => {
  return (
    <div>
      <section class="relative w-full px-8 text-gray-700 bg-white body-font">
        <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <a
            href="#_"
            class="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none">
            handyman.
          </a>

          <nav class="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
            <a
              href="#_"
              class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
              x-data="{ hover: false }">
              <span class="block">Home</span>
              <span class="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
                <span
                  x-show="hover"
                  class="absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900"
                  x-transition:enter="transition ease duration-200"
                  x-transition:enter-start="scale-0"
                  x-transition:enter-end="scale-100"
                  x-transition:leave="transition ease-out duration-300"
                  x-transition:leave-start="scale-100"
                  x-transition:leave-end="scale-0"
                  style="display: none;"></span>
              </span>
            </a>
            <a
              href="#_"
              class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
              x-data="{ hover: false }">
              <span class="block">Features</span>
              <span class="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
                <span
                  x-show="hover"
                  class="absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900"
                  x-transition:enter="transition ease duration-200"
                  x-transition:enter-start="scale-0"
                  x-transition:enter-end="scale-100"
                  x-transition:leave="transition ease-out duration-300"
                  x-transition:leave-start="scale-100"
                  x-transition:leave-end="scale-0"
                  style="display: none;"></span>
              </span>
            </a>
            <a
              href="#_"
              class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
              x-data="{ hover: false }">
              <span class="block">Pricing</span>
              <span class="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
                <span
                  x-show="hover"
                  class="absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900"
                  x-transition:enter="transition ease duration-200"
                  x-transition:enter-start="scale-0"
                  x-transition:enter-end="scale-100"
                  x-transition:leave="transition ease-out duration-300"
                  x-transition:leave-start="scale-100"
                  x-transition:leave-end="scale-0"
                  style="display: none;"></span>
              </span>
            </a>
            <a
              href="#_"
              class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
              x-data="{ hover: false }">
              <span class="block">Blog</span>
              <span class="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
                <span
                  x-show="hover"
                  class="absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900"
                  x-transition:enter="transition ease duration-200"
                  x-transition:enter-start="scale-0"
                  x-transition:enter-end="scale-100"
                  x-transition:leave="transition ease-out duration-300"
                  x-transition:leave-start="scale-100"
                  x-transition:leave-end="scale-0"
                  style="display: none;"></span>
              </span>
            </a>
          </nav>

          <div class="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
            <a
              href="#"
              class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
              Sign in
            </a>
            <span class="inline-flex rounded-md shadow-sm">
              <a
                href="#"
                class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Sign up
              </a>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavBar;
