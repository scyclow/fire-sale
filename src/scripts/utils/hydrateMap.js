import { Map, fromJS } from 'immutable';
import moment from 'moment';
import _ from 'lodash';

const hydrateMap = (collection, { moments=[], arrays=[] }={}) =>  {

  const hydrateMember = (value) => {
    let member = fromJS(value);
    _.each(moments, (m) => {
      member = member.update(m, (str) => moment(str))
    });

    _.each(arrays, (a) => {
      let property = member.get(a);
      member = member.set(a, property || []);
    });

    return member;
  }

  const numbered = _(collection)
    .map((value, id) => [Number(id), hydrateMember(value)] )
    .filter(member => member[0] || member[0] === 0)
    .value();

  return Map(numbered);
};

export default hydrateMap;
