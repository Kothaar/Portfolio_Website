import React from "react";
/**
 * @todo: Adjust images
 */
function Projects() {
  return (
    <div className="flex flex-col md:flex-row justify-around mx-10">
      <div>
        <a
          href="https://github.com/kburton501/PSU_Crypt"
          target="{_blank}"
          className="w-1/4"
        >
          <img
            src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
            alt="..."
            class="shadow-sm m-4 p-4 rounded-full align-middle "
          />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/Tattomoosa/cs594_project"
          target={"_blank"}
          rel="noreferrer"
          className="w-1/4"
        >
          <img
            src="https://images.unsplash.com/photo-1610056494052-6a4f83a8368c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
            alt="..."
            class="shadow-sm m-4 p-4 rounded-full align-middle"
          />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/kburton501/YardSale"
          target={"_blank"}
          rel="noreferrer"
        >
          <img
            src="https://images.unsplash.com/photo-1542793836-8227da569070?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
            alt="..."
            class="shadow-sm m-4 p-4 rounded-full align-middle"
          />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/Oikos-Techne/athenaeum-service"
          target={"_blank"}
          alt="Man with red shirt and green hat at a flea market"
          rel="noreferrer"
        >
          <img
            src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
            alt="Bookshelf full of books"
            class="shadow-sm m-4 p-4 rounded-full align-middle"
          />
        </a>
      </div>
    </div>
  );
}

export default Projects;
