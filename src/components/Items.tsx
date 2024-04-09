import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

type DataTypes = {
  streetAddress: string;
  fromCity: string;
  fromCountry: string;
  fromStreetAddress: string;
  fromPostCode: string;
  city: string;
  clientsEmail: string;
  clientsName: string;
  country: string;
  invoiceDate: string;
  itemName: string;
  postCode: string;
  price: string;
  projectDescription: string;
  status: string;
  qyt: string;
  id: string;
};

function Items({ invoices }: any) {
  const {filter} = useContext(UserContext);

  return (
    invoices &&
    invoices.map((doc: DataTypes) => {
      const {
        id,
        clientsName,
        status,
        invoiceDate,
        price
      } = doc;

      return (
        <div>
          {filter.includes(status) || filter.length == 0 ? <div className="mb-[16px]" key={id}>
          <ul>
            <Link
              to={`/invoice/${id}`}
              className="py-[16px] bg-white dark:bg-light-dark-cite rounded-lg pl-[32px] tablet:pl-[24px] flex items-center gap-[59px] cursor-pointer tablet:hidden hover:border hover:border-dark-blue dark:text-white"
            >
              <div className="flex gap-x-[44px]">
                <h1 className="font-bold tracking-[-0.25px]">
                  <span className="text-dark-blue">#</span>
                  {id.slice(0, 6)}
                </h1>
                <p className="font-medium text-opacity-white dark:text-hover-white">
                  {invoiceDate}
                </p>
              </div>
              <div className="flex items-center gap-[40px] grow justify-between">
                <div className="flex grow justify-between">
                  <p className="font-medium text-opacity-white dark:text-white">
                    {clientsName}
                  </p>
                  <h1 className="font-bold text-[15px] text-dark-cite tracking-[-0.25px] dark:text-white">
                    {price}
                  </h1>
                </div>
                <div className="flex gap-[20px] items-center mr-[24px]">
                  <button className={`flex items-center gap-[8px] ${status=="Pending" ? "text-[#FF8F00]" : "text-[#33D69F]"} w-[124px] pt-[14px] pb-[11px] font-bold rounded-lg ${status=="Pending" ? "bg-[#FF8F00]" : "bg-[#33D69F]"}  bg-opacity-5 justify-center`}>
                    <GoDotFill/>
                    {status}
                  </button>
                  <img
                    className="cursor-pointer tablet:hidden"
                    src="/right.svg"
                    alt="right"
                  />
                </div>
              </div>
            </Link>

            <Link
              to={`invoice/${id}`}
              className="pt-[25px] pb-[22px] bg-white dark:bg-light-dark-cite dark:text-white rounded-xl container hidden tablet:block tablet:flex justify-between hover:border hover:border-dark-blue"
            >
              <div>
                <h1 className="font-bold tracking-[-0.25px] mb-[24px]">
                  <span className="text-dark-blue">#</span>{id.slice(0, 6)}
                </h1>
                <p className="font-medium text-opacity-white dark:text-hover-white mb-[9px]">
                  {invoiceDate}
                </p>
                <h1 className="font-bold text-[15px] dark:text-light-bg text-dark-cite tracking-[-0.25px]">
                  {price}
                </h1>
              </div>
              <div className="text-end">
                <p className="font-medium text-opacity-white dark:text-hover-white mb-[24px]">
                  {clientsName}
                </p>
                <div className="flex gap-[20px] items-center mr-[24px]">
                  <button className={`flex items-center gap-[8px] ${status=="Pending" ? "text-[#FF8F00]" : "text-[#33D69F]"} w-[124px] pt-[14px] pb-[11px] font-bold rounded-lg ${status=="Pending" ? "bg-[#FF8F00]" : "bg-[#33D69F]"}  bg-opacity-5 justify-center`}>
                    <GoDotFill/>
                    {status}
                  </button>
                  <img
                    className="cursor-pointer tablet:hidden"
                    src="/svg/right.svg"
                    alt="right"
                  />
                </div>
              </div>
            </Link>
          </ul>
        </div> : ""}
        </div>
      );
    })
  );
}

export default Items;
