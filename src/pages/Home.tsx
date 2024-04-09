import HomeNavbar from "../components/NavbarOne";
import InvoiceCards from "../components/Items";
import { useCollection } from "../useCollection";
import { UserContext } from "../context/UserContext";
import { useState } from "react";

function Home() {
  const { documents } = useCollection("invoices");
  const [filter, setFilter] = useState([]);

  return (
    <UserContext.Provider value={{ filter, setFilter }}>
      <div className="container">
        <HomeNavbar docs={documents} />
        {documents == null || documents.length == 0 ? (
          <div className="text-center mt-[100px]">
            <img
              className="mb-[66px] mx-auto 630:w-[193px] 630:h-[160px] 630:mb-[42px]"
              src="/empty.png"
              alt="empty image"
              width={241}
              height={200}
            />
            <h2 className="font-bold text-[24px] tracking-[-0.75px] mb-[23px] dark:text-white">
              There is nothing here
            </h2>
            <p className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-opacity-white mx-auto dark:text-hover-white">
              Create an invoice by clicking the <br />
              <span className="font-bold text-[14px]">New Invoice</span> button
              and get started
            </p>
          </div>
        ) : (
          <InvoiceCards invoices={documents} />
        )}
      </div>
    </UserContext.Provider>
  );
}

export default Home;
