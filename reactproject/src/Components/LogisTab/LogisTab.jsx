import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sd from "../../assets/images/service-details.jpg";
import "./style.min.css";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const LogisTab = () => {
  useEffect(() => {
    const tabMenu = document.querySelectorAll(".tab-menu")[0];
    const tabMenuDtls = document.querySelectorAll(".tab-menu-dtls")[0];
    const tabChild = tabMenu.children;
    const tabMenuDtlsChild = tabMenuDtls.children;
    const tabChildArr = Array.from(tabChild);
    const tabMenuDtlsChildArr = Array.from(tabMenuDtlsChild);

    tabChildArr.forEach((item, index) => {
      item.addEventListener("click", () => {
        tabChildArr.forEach((item) => {
          item.classList.remove("active");
        });
        tabMenuDtlsChildArr.forEach((item) => {
          item.classList.add("hidden");
        });
        item.classList.add("active");
        tabMenuDtlsChildArr[index].classList.remove("hidden");
      });
    });
  }, []);

  return (
    <div className="container mx-auto grid md:grid-cols-3 gap-6 mb-24">
      <div className="col-span-1">
        <div className="border p-6">
          <ul className="tab-menu">
            <li className="active" id="tab1">
              Storage
            </li>
            <li id="tab2">Logistics</li>
            <li id="tab3">Cargo</li>
            <li id="tab4">Trucking</li>
            <li id="tab5">Packaging</li>
            <li id="tab6">Warehousing</li>
          </ul>
        </div>
        <h3 className="text-xl font-bold leading-6 my-2">
          Enim qui eos rerum in delectus
        </h3>
        <p>
          Nam voluptatem quasi numquam quas fugiat ex temporibus quo est. Quia
          aut quam quod facere ut non occaecati ut aut. Nesciunt mollitia illum
          tempore corrupti sed eum reiciendis. Maxime modi rerum.
        </p>
      </div>
      <div className="col-span-2 tab-menu-dtls">
        <div className="">
          <img src={sd} alt="" />
          <h2 className="text-3xl font-bold my-3">
            Temporibus 1 et in vero dicta aut eius lidero plastis trand lined
            voluptas dolorem ut voluptas
          </h2>
          <p>
            Blanditiis voluptate odit ex error ea sed officiis deserunt.
            Cupiditate non consequatur et doloremque consequuntur. Accusantium
            labore reprehenderit error temporibus saepe perferendis fuga
            doloribus vero. Qui omnis quo sit. Dolorem architecto eum et quos
            deleniti officia qui.
          </p>
          <ul className="my-3">
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-blue-600 mr-2"
              />
              Aut eum totam accusantium voluptatem.
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-blue-600 mr-2"
              />
              Assumenda et porro nisi nihil nesciunt voluptatibus.
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-blue-600 mr-2"
              />
              Ullamco laboris nisi ut aliquip ex ea
            </li>
          </ul>
          <p>
            Est reprehenderit voluptatem necessitatibus asperiores neque sed ea
            illo. Deleniti quam sequi optio iste veniam repellat odit. Aut
            pariatur itaque nesciunt fuga.
          </p>
          <p className="mt-3">
            Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut
            consequuntur recusandae mollitia doloremque est architecto
            cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex
            repellendus eveniet velit sint quia sapiente cumque. Et ipsa
            perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum.
            Eaque iusto cupiditate et totam et quia dolorum in. Sunt molestiae
            ipsum at consequatur vero. Architecto ut pariatur autem ad non
            cumque nesciunt qui maxime. Sunt eum quia impedit dolore alias
            explicabo ea.
          </p>
        </div>
        <div className="hidden">
          <img src={sd} alt="" />
          <h2 className="text-3xl font-bold my-3">
            Temporibus 2 et in vero dicta aut eius lidero plastis trand lined
            voluptas dolorem ut voluptas
          </h2>
          <p>
            Blanditiis voluptate odit ex error ea sed officiis deserunt.
            Cupiditate non consequatur et doloremque consequuntur. Accusantium
            labore reprehenderit error temporibus saepe perferendis fuga
            doloribus vero. Qui omnis quo sit. Dolorem architecto eum et quos
            deleniti officia qui.
          </p>
          <ul className="my-3">
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-blue-600 mr-2"
              />
              Aut eum totam accusantium voluptatem.
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-blue-600 mr-2"
              />
              Assumenda et porro nisi nihil nesciunt voluptatibus.
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-blue-600 mr-2"
              />
              Ullamco laboris nisi ut aliquip ex ea
            </li>
          </ul>
          <p>
            Est reprehenderit voluptatem necessitatibus asperiores neque sed ea
            illo. Deleniti quam sequi optio iste veniam repellat odit. Aut
            pariatur itaque nesciunt fuga.
          </p>
          <p className="mt-3">
            Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut
            consequuntur recusandae mollitia doloremque est architecto
            cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex
            repellendus eveniet velit sint quia sapiente cumque. Et ipsa
            perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum.
            Eaque iusto cupiditate et totam et quia dolorum in. Sunt molestiae
            ipsum at consequatur vero. Architecto ut pariatur autem ad non
            cumque nesciunt qui maxime. Sunt eum quia impedit dolore alias
            explicabo ea.
          </p>
        </div>
        <div className="hidden">
          <img src={sd} alt="" />
          <h2 className="text-3xl font-bold my-3">
            Temporibus 3 et in vero dicta aut eius lidero plastis trand lined
            voluptas dolorem ut voluptas
          </h2>
          <p>
            Blanditiis voluptate odit ex error ea sed officiis deserunt.
            Cupiditate non consequatur et doloremque consequuntur. Accusantium
            labore reprehenderit error temporibus saepe perferendis fuga
            doloribus vero. Qui omnis quo sit. Dolorem architecto eum et quos
            deleniti officia qui.
          </p>
          <ul className="my-3">
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-blue-600 mr-2"
              />
              Aut eum totam accusantium voluptatem.
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-blue-600 mr-2"
              />
              Assumenda et porro nisi nihil nesciunt voluptatibus.
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-blue-600 mr-2"
              />
              Ullamco laboris nisi ut aliquip ex ea
            </li>
          </ul>
          <p>
            Est reprehenderit voluptatem necessitatibus asperiores neque sed ea
            illo. Deleniti quam sequi optio iste veniam repellat odit. Aut
            pariatur itaque nesciunt fuga.
          </p>
          <p className="mt-3">
            Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut
            consequuntur recusandae mollitia doloremque est architecto
            cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex
            repellendus eveniet velit sint quia sapiente cumque. Et ipsa
            perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum.
            Eaque iusto cupiditate et totam et quia dolorum in. Sunt molestiae
            ipsum at consequatur vero. Architecto ut pariatur autem ad non
            cumque nesciunt qui maxime. Sunt eum quia impedit dolore alias
            explicabo ea.
          </p>
        </div>
        <div className="hidden">
          <img src={sd} alt="" />
          <h2 className="text-3xl font-bold my-3">
            Temporibus 4 et in vero dicta aut eius lidero plastis trand lined
            voluptas dolorem ut voluptas
          </h2>
          <p>
            Blanditiis voluptate odit ex error ea sed officiis deserunt.
            Cupiditate non consequatur et doloremque consequuntur. Accusantium
            labore reprehenderit error temporibus saepe perferendis fuga
            doloribus vero. Qui omnis quo sit. Dolorem architecto eum et quos
            deleniti officia qui.
          </p>
          <ul className="my-3">
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-blue-600 mr-2"
              />
              Aut eum totam accusantium voluptatem.
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-blue-600 mr-2"
              />
              Assumenda et porro nisi nihil nesciunt voluptatibus.
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-blue-600 mr-2"
              />
              Ullamco laboris nisi ut aliquip ex ea
            </li>
          </ul>
          <p>
            Est reprehenderit voluptatem necessitatibus asperiores neque sed ea
            illo. Deleniti quam sequi optio iste veniam repellat odit. Aut
            pariatur itaque nesciunt fuga.
          </p>
          <p className="mt-3">
            Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut
            consequuntur recusandae mollitia doloremque est architecto
            cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex
            repellendus eveniet velit sint quia sapiente cumque. Et ipsa
            perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum.
            Eaque iusto cupiditate et totam et quia dolorum in. Sunt molestiae
            ipsum at consequatur vero. Architecto ut pariatur autem ad non
            cumque nesciunt qui maxime. Sunt eum quia impedit dolore alias
            explicabo ea.
          </p>
        </div>
        <div className="hidden">
          <img src={sd} alt="" />
          <h2 className="text-3xl font-bold my-3">
            Temporibus 5 et in vero dicta aut eius lidero plastis trand lined
            voluptas dolorem ut voluptas
          </h2>
          <p>
            Blanditiis voluptate odit ex error ea sed officiis deserunt.
            Cupiditate non consequatur et doloremque consequuntur. Accusantium
            labore reprehenderit error temporibus saepe perferendis fuga
            doloribus vero. Qui omnis quo sit. Dolorem architecto eum et quos
            deleniti officia qui.
          </p>
          <ul className="my-3">
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-blue-600 mr-2"
              />
              Aut eum totam accusantium voluptatem.
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-blue-600 mr-2"
              />
              Assumenda et porro nisi nihil nesciunt voluptatibus.
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-blue-600 mr-2"
              />
              Ullamco laboris nisi ut aliquip ex ea
            </li>
          </ul>
          <p>
            Est reprehenderit voluptatem necessitatibus asperiores neque sed ea
            illo. Deleniti quam sequi optio iste veniam repellat odit. Aut
            pariatur itaque nesciunt fuga.
          </p>
          <p className="mt-3">
            Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut
            consequuntur recusandae mollitia doloremque est architecto
            cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex
            repellendus eveniet velit sint quia sapiente cumque. Et ipsa
            perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum.
            Eaque iusto cupiditate et totam et quia dolorum in. Sunt molestiae
            ipsum at consequatur vero. Architecto ut pariatur autem ad non
            cumque nesciunt qui maxime. Sunt eum quia impedit dolore alias
            explicabo ea.
          </p>
        </div>
        <div className="hidden">
          <img src={sd} alt="" />
          <h2 className="text-3xl font-bold my-3">
            Temporibus 6 et in vero dicta aut eius lidero plastis trand lined
            voluptas dolorem ut voluptas
          </h2>
          <p>
            Blanditiis voluptate odit ex error ea sed officiis deserunt.
            Cupiditate non consequatur et doloremque consequuntur. Accusantium
            labore reprehenderit error temporibus saepe perferendis fuga
            doloribus vero. Qui omnis quo sit. Dolorem architecto eum et quos
            deleniti officia qui.
          </p>
          <ul className="my-3">
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-blue-600 mr-2"
              />
              Aut eum totam accusantium voluptatem.
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-blue-600 mr-2"
              />
              Assumenda et porro nisi nihil nesciunt voluptatibus.
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-blue-600 mr-2"
              />
              Ullamco laboris nisi ut aliquip ex ea
            </li>
          </ul>
          <p>
            Est reprehenderit voluptatem necessitatibus asperiores neque sed ea
            illo. Deleniti quam sequi optio iste veniam repellat odit. Aut
            pariatur itaque nesciunt fuga.
          </p>
          <p className="mt-3">
            Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut
            consequuntur recusandae mollitia doloremque est architecto
            cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex
            repellendus eveniet velit sint quia sapiente cumque. Et ipsa
            perferendis ut nihil. Laboriosam vel voluptates tenetur nostrum.
            Eaque iusto cupiditate et totam et quia dolorum in. Sunt molestiae
            ipsum at consequatur vero. Architecto ut pariatur autem ad non
            cumque nesciunt qui maxime. Sunt eum quia impedit dolore alias
            explicabo ea.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogisTab;
