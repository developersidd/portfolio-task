import Icon from "@/components/common/Icons";

const ProjectNavigators = () => {
  return (
    <div className="flex justify-between py-8 md:py-12 lg:py-16 xl:py-20">
      <div>
        <button className="flex items-start gap-7">
          <Icon
            alt="left-arrow"
            name="half-left-arrow.svg"
            className="w-16 h-10"
          />
          <span className="text-sm font-semibold text-white uppercase leading-[23.8px] font-rubik mt-1">
            {" "}
            Previous work{" "}
          </span>
        </button>
      </div>
      <div>
        <button className="flex items-end gap-7">
          <span className="text-sm font-semibold text-white uppercase leading-[23.8px] font-rubik">
            Next work
          </span>
          <Icon
            alt="right-arrow"
            name="half-right-arrow.svg"
            className="w-16 h-10"
          />
        </button>
      </div>
    </div>
  );
};

export default ProjectNavigators;
