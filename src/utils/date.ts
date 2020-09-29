export type FormattedDate = {
  datetime: string;
  isNew: boolean;
};

export const formatDate = (d: Date, now: Date): FormattedDate => {

  const dtf = new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  // skip separator(ex: `/`) between each values by `,`
  const [
    { value: year },
    ,
    { value: month },
    ,
    { value: day },
    ,
    { value: hour },
    ,
    { value: minute },
    ,
    { value: second },
  ] = dtf.formatToParts(d);

  const date = [year, month, day].join('/');
  const time = [hour, minute, second].join(':');

  const datetime = [date, time].join(' ');

  return {
    datetime,
    isNew: true,
  };
}

