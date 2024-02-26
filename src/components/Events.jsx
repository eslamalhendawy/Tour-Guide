const Events = () => {
  return (
    <section className="bg-postage minHeight p-4">
      <div className="container mx-auto flex items-stretch bg-white rounded-lg overflow-hidden gap-2">
        <div className="basis-1/2">
          <img className="h-full" src="/assets/event1.png" alt="" />
        </div>
        <div className="basis-1/2 space-y-2">
          <img className="w-full" src="/assets/event2.png" alt="" />
          <img className="w-full" src="/assets/event3.png" alt="" />
        </div>
      </div>
      <div className="container mx-auto bg-white p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-6">
          <div className="mb-3 md:mb-0">
            <h3 className="text-brownOrange text-xl mb-3">Events in Cairo</h3>
            <div className="flex items-center gap-2 text-sm">
              <i className="fa-solid fa-location-dot text-brownOrange"></i>
              <span>Location of the events</span>
            </div>
          </div>
          <button className="bg-brownOrange hover:bg-postage duration-300 text-white py-2 px-8 rounded-lg">View Map</button>
        </div>
        <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare erat ac tempor consectetur. Donec dictum lectus et velit pretium, lacinia pulvinar nisl sollicitudin. Curabitur finibus mi mi, et gravida libero blandit nec. Duis dignissim massa a diam imperdiet, ut scelerisque est vestibulum. Donec accumsan leo eu massa ultrices blandit. Aliquam fringilla augue et massa efficitur congue eu et justo. Vestibulum a ipsum tincidunt, sollicitudin tellus eu, varius eros. Proin aliquam tortor dolor, in vulputate tellus interdum ac. Nunc malesuada tellus sem, at tincidunt sapien porta et. Mauris maximus nisi est, sed fringilla erat hendrerit quis. Cras ullamcorper quam </p>
        <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare erat ac tempor consectetur. Donec dictum lectus et velit pretium, lacinia pulvinar nisl sollicitudin. Curabitur finibus mi mi, et gravida libero blandit nec. Duis dignissim massa a diam imperdiet, ut scelerisque est vestibulum. Donec accumsan leo eu massa ultrices blandit. Aliquam fringilla augue et massa efficitur congue eu et justo. Vestibulum a ipsum tincidunt, sollicitudin tellus eu, varius eros. Proin aliquam tortor dolor, in vulputate tellus interdum ac. Nunc malesuada tellus sem, at tincidunt sapien porta et. Mauris maximus nisi est, sed fringilla erat hendrerit quis. Cras ullamcorper quam </p>
        <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare erat ac tempor consectetur. Donec dictum lectus et velit pretium, lacinia pulvinar nisl sollicitudin. Curabitur finibus mi mi, et gravida libero blandit nec. Duis dignissim massa a diam imperdiet, ut scelerisque est vestibulum. Donec accumsan leo eu massa ultrices blandit. Aliquam fringilla augue et massa efficitur congue eu et justo. Vestibulum a ipsum tincidunt, sollicitudin tellus eu, varius eros. Proin aliquam tortor dolor, in vulputate tellus interdum ac. Nunc malesuada tellus sem, at tincidunt sapien porta et. Mauris maximus nisi est, sed fringilla erat hendrerit quis. Cras ullamcorper quam </p>
      </div>
    </section>
  );
};

export default Events;
