import Image from "next/image";
import Link from "next/link";
import BankCard from "./BankCard";

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">
              {user.firstName[0]}
            </span>
          </div>
          <div className="profile-details">
            <h2 className="profile-name">
              {user.firstName} {user.lastName}
            </h2>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>
      </section>
      <section className="banks">
        <div className="flex w-full justify-between">
          <h3 className="header-2">My Banks</h3>
          <Link href="/" className="flex gap-2">
            <Image src="/icons/plus.svg" width={20} height={20} alt="plus" />
            <h3 className="text-14 font-semibold text-gray-600">Add Bank</h3>
          </Link>
        </div>
        {banks.length > 0 && (
          <div className="relative w-full flex flex-1 flex-col items-start justify-center gap-5">
            <div className="relative z-10 ">
              <BankCard
                key={banks[0].$id}
                account={banks[0]}
                userName={`${user.firstName} ${user.lastName}`}
                showBalance={false}
              />
            </div>
            {banks[1] && (
              <div className="absolute right-0 top-8 z-0 w-[90%]">
                <BankCard
                  key={banks[1].$id}
                  account={banks[1]}
                  userName={`${user.firstName} ${user.lastName}`}
                  showBalance={false}
                />
              </div>
            )}
          </div>
        )}
      </section>
      <div className="mt-10 flex flex-1 flex-col gap-6">
        <h3 className="header-2">Top categories</h3>
        <div className="space-y-5">Categories</div>
      </div>
    </aside>
  );
};

export default RightSidebar;