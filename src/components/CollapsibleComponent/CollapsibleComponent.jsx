import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const CollapsibleComponent = ({ item, type, setshowingData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const renderContent = () => {
    switch (type) {
      case "chapter":
        return item.units.map((unit) => (
          <CollapsibleComponent
            key={`unit-${unit.id}`}
            item={unit}
            type="unit"
            setshowingData={setshowingData}
          />
        ));
      case "unit":
        return item.subtopics.map((subtopic) => (
          <CollapsibleComponent
            key={`subtopic-${subtopic.id}`}
            item={subtopic}
            type="subtopic"
            setshowingData={setshowingData}
          />
        ));
      case "subtopic":
        return item.types.map((type) => (
          <div className="type" key={`type-${type.id}`}>
            {[6, 5, 4].includes(type.subtopic_type) && (
              <div onClick={() => setshowingData(type)}>
                <div className="topic my-3">
                  <p>
                    Worksheets
                    <span>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </p>
                </div>
              </div>
            )}
            {/* {type.subtopic_type === 4 && (
              <iframe
                width="560"
                height="315"
                src={type.youtube_link}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )} */}
          </div>
        ));
      default:
        return null;
    }
  };

  return (
    <div className={`${type}_component`}>
      <div onClick={toggleOpen} className={`${type}_header`}>
        <div className={`${type}_buttons chapter_buttons`}>
          <span className={`${type}_name`}>{item.name}</span>
          <span>
            <FontAwesomeIcon icon={isOpen ? faAngleDown : faAngleRight} />
          </span>
        </div>
      </div>
      {isOpen && <div className={`${type}_content`}>{renderContent()}</div>}
    </div>
  );
};

export default CollapsibleComponent;
