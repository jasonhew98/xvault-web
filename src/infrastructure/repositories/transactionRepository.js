import createHttpClient from "../createHttpClient";

const xvaultService = createHttpClient(process.env.VUE_APP_XVAULT_SERVICE_URL);

const paths = {
  transaction: "/api/transaction",
};

export default {
  async addTransaction(record) {
    return await xvaultService.post(paths.transaction, record, {
      authType: "bearer",
    });
  },
  async getTransactions() {
    return await xvaultService.get(
      `${paths.transaction}?sortBy=transactionDate&sortOrder=1&pageSize=10&currentPage=1`,
      { authType: "bearer" }
    );
  },
  async getTransactionPageSize() {
    return await xvaultService.get(`${paths.transaction}/pageSize`, {
      authType: "bearer",
    });
  },
  async getTransaction() {
    return await xvaultService.get(`${paths.transaction}/detail`, {
      authType: "bearer",
    });
  },
  async updateTransaction(record) {
    return await xvaultService.patch(`${paths.transaction}`, record, {
      authType: "bearer",
    });
  },
  async deleteTransaction(transactionId) {
    return await xvaultService.delete(`${paths.transaction}/${transactionId}`, {
      authType: "bearer",
    });
  },
};
