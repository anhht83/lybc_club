export const filterHistories = (histories = [], query = {}) => {
  if (!histories) return [];
  let tmpHistories = [...histories];
  let { showRecords } = query;
  showRecords =
    showRecords >= histories.length ? histories.length : showRecords;

  /* filter */
  const name = query.name.trim();
  if (name) {
    tmpHistories = tmpHistories.filter(
      item =>
        item.acf.store &&
        `compra ${item.acf.store}`.toLowerCase().search(name.toLowerCase()) >
          -1,
    );
  }
  if (query.startDateInvoice && query.endDateInvoice) {
    tmpHistories = tmpHistories.filter(
      item =>
        item.acf.history_date &&
        item.acf.history_date >= query.startDateInvoice &&
        item.acf.history_date <= query.endDateInvoice,
    );
  }
  const hasRecords = tmpHistories.length > showRecords;

  return {
    histories: tmpHistories.splice(0, showRecords), // show only showRecords number
    query: {
      ...query,
      showRecords,
      hasRecords,
    },
  };
};
