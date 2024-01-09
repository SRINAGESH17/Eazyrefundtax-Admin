import { Icon } from "@iconify/react";
import greenDotIcon from "../../../assets/Ellipse 9.svg";

const DownloadInvoice = ({ close }) => {
  return (
    <div className="w-full px-[5rem] flex justify-center">
      <div className="bg-[#fff] w-full sm:w-[32rem] md:w-[42rem] min-w-[15rem] rounded-[1.2rem]  pb-[3rem] pt-[1rem] lg:pt-[2rem]  font-lato">
        <div className="px-[1.5rem] lg:px-[2.5rem] pb-[0.5rem]  ">
          <div className="flex flex-row justify-between items-center">
            <div className="flex">
              <h1 className="text-[#1A1A1A] text-[0.8rem] lg:text-[1.1rem] font-[700]">
                Invoice :{" "}
                <span className="text-[#C5090A]"># ORD-5215102420</span>
              </h1>

              <div className="flex px-3 bg-[#25BF1733] w-20 rounded-md justify-between items-center">
                <img src={greenDotIcon} alt="" />
                <p className="text-xs font-amulya_light text-[#25BF17]">
                  Active
                </p>
              </div>
            </div>
            <button
              onClick={() => close()}
              className="lg:rounded-[1.5rem] rounded-full border border-solid border-[#D1D4D7] p-[0.5rem] flex justify-center items-center"
            >
              <Icon
                icon="ic:sharp-cancel"
                className="text-[#C5090A] text-[0.8rem] lg:text-[1.5rem] "
              />
            </button>
          </div>
        </div>
        <hr className="h-[1px] bg-[#8888A3] w-full" />

        <div className="flex">
          <div className="flex flex-col px-6">
            <div className="flex">
              <p>From:</p>
              <p className="ml-16">Eazy Refund</p>
            </div>
            <div className="flex">
              <p>From:</p>
              <p className="ml-16">Eazy Refund</p>
            </div>
            <div className="flex">
              <p>From:</p>
              <p className="ml-16">Eazy Refund</p>
            </div>
          </div>

          <div className="flex flex-col pl-40">
            <div className="flex bg-[#C5090A33] justify-start">
              <p className="text-[#C5090A] text-sm font-amulya_medium">
                Payment Information
              </p>
            </div>
            <p className="text-sm font-amulya_bold">June 26, 2014</p>
            <div className="flex flex-col">
              <div className="flex">
                <p>Payment Method:</p>
                <p>Credit Card</p>
              </div>
              <div className="flex">
                <p>Transaction Id:</p>
                <p>357825881425</p>
              </div>
              <div className="flex">
                <p>Order Id:</p>
                <p>EZY-108947891258</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[1rem] px-8">
          <h1 className="text-[#1A1616] text-[0.8rem] lg:text-[1rem] font-[700] mt-[0.6rem]">
            Invoice Items
          </h1>

          <div className="w-full overflow-x-auto">
            <table className="border border-solid border-[#D1D4D7] rounded-[0.5rem]  w-full ">
              <thead className="border-b border-solid border-[#D1D4D7]">
                <tr>
                  <th className="py-[1rem] px-[2rem] text-[#8888A3] text-[0.6rem] lg:text-[0.8rem]">
                    Tax File Type
                  </th>
                  <th className="py-[1rem] px-[2rem] text-[#8888A3] text-[0.6rem] lg:text-[0.8rem]">
                    Price
                  </th>
                  <th className="py-[1rem] px-[2rem] text-[#8888A3] text-[0.6rem] lg:text-[0.8rem]">
                    Qty
                  </th>{" "}
                  <th className="py-[1rem] px-[2rem] text-[#8888A3] text-[0.6rem] lg:text-[0.8rem]">
                    Total Prize
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="text-center text-[#8888A3] text-[0.6rem] lg:text-[0.8rem] py-[1rem] px-[2rem]">
                    TAx Organizer
                  </td>
                  <td className="text-center text-[#8888A3] text-[0.6rem] lg:text-[0.8rem] py-[1rem] px-[2rem]">
                    $55
                  </td>{" "}
                  <td className="text-center text-[#8888A3] text-[0.6rem] lg:text-[0.8rem] py-[1rem] px-[2rem]">
                    1
                  </td>
                  <td className="text-center text-[#8888A3] text-[0.6rem] lg:text-[0.8rem] py-[1rem] px-[2rem]">
                    $55
                  </td>
                </tr>
                <tr>
                  <td className="text-center text-[#8888A3] text-[0.6rem] lg:text-[0.8rem] py-[1rem] px-[2rem]">
                    TAx Organizer
                  </td>
                  <td className="text-center text-[#8888A3] text-[0.6rem] lg:text-[0.8rem] py-[1rem] px-[2rem]">
                    $55
                  </td>{" "}
                  <td className="text-center text-[#8888A3] text-[0.6rem] lg:text-[0.8rem] py-[1rem] px-[2rem]">
                    1
                  </td>
                  <td className="text-center text-[#8888A3] text-[0.6rem] lg:text-[0.8rem] py-[1rem] px-[2rem]">
                    $55
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <DataTable
              columns={columns}
              data={sampleData}
              customStyles={customStyles}
            /> */}
          <div className="flex flex-row items-center justify-between">
            <p className="text-[#8888A3] text-[0.6rem] lg:text-[0.8rem] font-[400] max-w-[60%]">
              Here we can write a additional notes for the client to get better
              understanding of this invoice.
            </p>
            <p className="text-[#8888A3] text-[0.8rem] lg:text-[1.1rem] font-[500]">
              Total Amount :{" "}
              <span className="text-[#1A1A1A] font-[700]">$100.5</span>
            </p>
          </div>

          <div className="flex flex-row items-center gap-[1rem] self-end">
            
            <button className=" bg-[#C5090A] rounded-[1.2rem] text-[0.8rem] text-white py-[0.5rem] px-[2rem]">
              Download Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadInvoice;
