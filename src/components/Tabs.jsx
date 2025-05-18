const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex gap-4 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded-lg ${activeTab === tab ? 'bg-yellow-500 text-white' : 'bg-gray-700 text-gray-300'}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
 
export default Tabs;