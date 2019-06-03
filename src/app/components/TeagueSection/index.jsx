import React from 'react';
import PropTypes from 'prop-types';
import dateFormatter from '../../utils/dateFormatter';

const TeagueContent = ({
  children,
  title,
  subtitles,
  hasList,
  imgSrc,
  imgStyle,
  startDate,
  endDate,
}) => {
  const dateRangeString = dateFormatter.buildDateRangeString(
    startDate,
    endDate,
  );

  const renderSubtitles = () => {
    return (
      subtitles &&
      subtitles.map((subtitle, index) => (
        <div key={index} className="">
          {subtitle}
        </div>
      ))
    );
  };

  return (
    <div className="column teague-content">
      <div className="columns is-multiline">
        <div className="column is-3 is-paddingless">
          <figure className="teague-section-image has-text-centered image">
            <img src={imgSrc} alt={title} title={title} style={imgStyle} />
          </figure>
        </div>
        <div
          className={`column is-9 no-vertical-padding ${hasList &&
            'teague-section--pulled-title'}`}
        >
          <h3 className="title is-size-4-desktop">{title}</h3>
          {renderSubtitles()}
          {children && hasList && children}
          {dateRangeString && <div className="">{dateRangeString}</div>}
        </div>
        {children && !hasList && <div className="column is-12">{children}</div>}
      </div>
    </div>
  );
};

TeagueContent.propTypes = {
  children: PropTypes.node,
  imgSrc: PropTypes.string,
  imgStyle: PropTypes.objectOf(PropTypes.string),
  title: PropTypes.string,
  subtitles: PropTypes.arrayOf(PropTypes.string),
  hasList: PropTypes.bool,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
};

export default TeagueContent;
