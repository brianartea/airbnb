import Image from "next/image";

function Copyright() {
  return (
    <div className="flex justify-center items-center mx-auto ml-28 mr-28">
      <Image
        src="https://links.papareact.com/qd3"
        width={80}
        height={40}
        objectFit="contain"
        // objectPosition="left"
        className="h-20"
      />
      <p className="text-[14px] p-3 text-center font-semibold text-gray-500">
        ©2008 - 2021
      </p>
    </div>
  );
}

export default Copyright;
