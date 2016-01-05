import { Map, fromJS } from 'immutable';
import _ from 'lodash';

const hydrateMap = (collection) =>  {
  const numbered = _(collection)
    .map((value, id) => [Number(id), fromJS(value)])
    .filter(member => member[0] || member[0] === 0)
    .value();

  return Map(numbered);
};

export default hydrateMap;
