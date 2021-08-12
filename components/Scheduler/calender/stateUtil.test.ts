import { generateWeekRowObj } from './stateUtil';
import { DateTime } from "luxon";

test('generate week obj', () => {
  // expect(sum(1, 2)).toBe(3);
  let today = DateTime.fromObject({
    year: 2021,
    month: 8,
    day: 11,
  });
  let startDate = DateTime.fromObject({
    year: 2021,
    month: 8,
    day: 1,
  });
  let endDate = DateTime.fromObject({
    year: 2021,
    month: 8,
    day: 31,
  });
  let actual_result_set = generateWeekRowObj(
    today,
    startDate,
    endDate,
    [],
    true
  );

  let expected_result = generateWeekRowObj(
    today,
    startDate,
    endDate,
    [],
    true
  );
  debugger;
  
  expect(actual_result_set).toStrictEqual(expected_result);

});