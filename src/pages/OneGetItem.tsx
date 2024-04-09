import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { doc, deleteDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

function SingleInvoice() {
  const navigate = useNavigate();

  const deleteItem = async (e: any) => {
    await deleteDoc(doc(db, "invoices", e));
    console.log(e);
    navigate("/");
  };

  const params = useParams();
  const [singleDoc, setSingleDoc] = useState<any>(null);
  useEffect(() => {
    async function getOneDoc() {
      const docRef = doc(db, "invoices", `${params.id}`);
      const docSnap = await getDoc(docRef);
      setSingleDoc(docSnap.data());
    }
    getOneDoc();
  }, []);

  const editStatus = async (e: any) => {
    navigate("/")
    const washingtonRef = doc(db, "invoices", e);
    await updateDoc(washingtonRef, {
      status: "Paid"
    });
  };

  return (
    <>
      <div className="pt-[40px] tablet:pt-[67px] container">
        <Link
          className="font-bold text-[15px] tracking-[-0.25px] text-dark-cite dark:text-white flex items-center gap-[20px] mb-[21px]"
          to={"/"}
        >
          <img src="/svg/left.svg" alt="" />
          Go back
        </Link>
        <div className="container justify-between shadow rounded-xl flex tablet:flex-col bg-white dark:bg-light-dark-cite mb-[17px]">
          <div className="flex gap-[22px] items-center justify-between py-[20px]">
            <p className="font-medium text-opacity-white dark:text-hover-white">
              Status
            </p>
            <button className={`flex items-center gap-[8px] ${status=="Pending" ? "text-[#FF8F00]" : "text-[#33D69F]"} w-[124px] pt-[14px] pb-[11px] font-bold rounded-lg ${status=="Pending" ? "bg-[#FF8F00]" : "bg-[#33D69F]"}  bg-opacity-5 justify-center`}>
              <GoDotFill />
              {singleDoc ? singleDoc.status! : ""}
            </button>
          </div>
          <div className="flex gap-[10px] tablet:hidden items-center ">
            <button className="w-[73px] bg-[#F9FAFE] pt-[18px] pb-[15px] font-bold text-light-violet rounded-full text-[15px] tracking-[-0.25px] active:opacity-70">
              Edit
            </button>
            <>
              <label
                htmlFor="my_modal_6"
                className="w-[89px] bg-cite-red pt-[18px] pb-[15px] font-bold text-white rounded-full text-[15px] tracking-[-0.25px] active:opacity-70 text-center"
              >
                Delete
              </label>

              <input type="checkbox" id="my_modal_6" className="modal-toggle" />
              <div className="modal" role="dialog">
                <div className="modal-box bg-white dark:bg-light-dark-cite dark:text-white pt-[51px] pl-[48px]">
                  <h3 className="font-bold text-[24px]">Confirm Deletion</h3>
                  <p className="py-4 dark:text-hover-white">
                    Are you sure you want to delete invoice #XM9141? This action
                    cannot be undone.
                  </p>
                  <div className="modal-action">
                    <label
                      htmlFor="my_modal_6"
                      className="w-[89px] bg-[#F9FAFE] text-dark-blue pt-[18px] pb-[15px] font-bold rounded-full text-[15px] tracking-[-0.25px] active:opacity-70 text-center"
                    >
                      Cancel
                    </label>
                    <button
                      onClick={() => deleteItem(params.id)}
                      className="w-[89px] bg-cite-red pt-[18px] pb-[15px] font-bold text-white rounded-full text-[15px] tracking-[-0.25px] active:opacity-70 text-center"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </>
            <button onClick={()=>editStatus(params.id)}  className="w-[131px] bg-dark-blue pt-[18px] pb-[15px] font-bold text-white rounded-full text-[15px] tracking-[-0.25px] active:opacity-70">
              Mark as Paid
            </button>
          </div>
        </div>
        {!singleDoc ? (
          <div className="text-center mt-32">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="container rounded-xl py-[28px] bg-white dark:bg-light-dark-cite">
            <div className="flex items-center justify-between mb-[21px] tablet:flex-col tablet:items-start tablet:gap-y-[30px]">
              <div>
                <h1 className="font-bold tracking-[-0.25px] mb-[7px] dark:text-white">
                  <span className="text-hover-white">#</span>
                  {params.id?.slice(0, 6)}
                </h1>
                <p className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px]">
                  Graphic Design {singleDoc.status}
                </p>
              </div>
              <div className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px] text-end">
                <p>{singleDoc.streetAddress}</p>
                <p>{singleDoc.billFromCity}</p>
                <p>{singleDoc.billFromPostCode}</p>
              </div>
            </div>
            <div className="flex gap-x-[117px] tablet:flex-col tablet:mb-[32px]">
              <div className="flex items-start gap-[118px] tablet:gap-[61px]">
                <div>
                  <p className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px] mb-[13px]">
                    Invoice Date
                  </p>
                  <h1 className="font-bold tracking-[-0.25px] text-[15px] dark:text-white mb-[31px]">
                    {singleDoc.invoiceDate}
                  </h1>
                  <p className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px] mb-[13px]">
                    Payment Due
                  </p>
                  <h1 className="font-bold tracking-[-0.25px] dark:text-white text-[15px] mb-[31px]">
                    20 Sep 2021
                  </h1>
                </div>
                <div>
                  <p className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px] mb-[13px]">
                    Bill To
                  </p>
                  <h1 className="font-bold tracking-[-0.25px] dark:text-white text-[15px] mb-[7px]">
                    {singleDoc.clientsEmail}
                  </h1>
                  <p className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px]">
                    {singleDoc.streetAddress}
                  </p>
                  <p className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px]">
                    {singleDoc.city}
                  </p>
                  <p className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px]">
                    {singleDoc.postCode}
                  </p>
                  <p className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px]">
                    {singleDoc.country}
                  </p>
                </div>
              </div>
              <div>
                <p className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px] mb-[13px]">
                  Sent to
                </p>
                <h1 className="font-bold tracking-[-0.25px] dark:text-white text-[15px] mb-[7px]">
                  {singleDoc.clientsName}
                </h1>
              </div>
            </div>
            <div>
              <div className="container pt-[33px] pb-[19px] bg-[#F9FAFE] dark:bg-light-dark font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px] rounded-t-lg">
                <div className="mb-[13px] flex justify-between items-center tablet:hidden">
                  <p>Item Name</p>
                  <div className="flex items-center gap-[92px]">
                    <p>QTY.</p>
                    <p>Price</p>
                    <p>Total</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-[12px] tablet:flex-col tablet:items-start mobile:mx-[15px]">
                    <h1 className="font-bold tracking-[-0.25px] text-[15px] dark:text-white text-dark-cite">
                      {singleDoc.itemName}
                    </h1>
                    <div className="flex items-center gap-[63px] tablet:gap-0 tablet:items-start">
                      <p className="flex gap-[5px]">
                        {singleDoc.qyt}{" "}
                        <span className="hidden tablet:block">x</span>
                        <p className="ml-[80px] tablet:ml-0">
                          £ {singleDoc.price}.00
                        </p>
                      </p>
                      <p className="text-dark-cite font-bold text-[15px] dark:text-white tablet:hidden">
                        £ {singleDoc.qyt * singleDoc.price}.00
                      </p>
                    </div>
                    <p className="text-dark-cite font-bold text-[15px] dark:text-white hidden tablet:block ml-auto mt-[-25px]">
                      £ 156.00
                    </p>
                  </div>
                </div>
              </div>
              <div className="py-[14px] container bg-[#373B53] dark:bg-dark-cite rounded-b-lg text-white flex items-center justify-between">
                <p className="font-medium text-[13px]">Amount Due</p>
                <h1 className="font-bold text-[24px] tracking-[-0.5px]">
                  £ {singleDoc.qyt * singleDoc.price}.00
                </h1>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="gap-[8px] items-center w-full  justify-center bg-white hidden tablet:flex py-[20px] fixed bottom-0 dark:bg-light-dark-cite">
        <button className="w-[73px] bg-[#F9FAFE] pt-[18px] pb-[15px] font-bold text-light-violet rounded-full text-[15px] tracking-[-0.25px]">
          Edit
        </button>
        <button>Delete</button>
        <button onClick={()=>editStatus(params.id)} className="w-[131px] bg-dark-blue pt-[18px] pb-[15px] font-bold text-white rounded-full text-[15px] tracking-[-0.25px]">
          Mark as Paid 
        </button>
      </div>
    </>
  );
}

export default SingleInvoice;
