import ExpenseComponent from "../component/fromComponent.jsx"
import Layout from "../layout/Layout.jsx"

function ExpensePage() {
  return (
    <Layout title="EXPENSE">
      {
        <ExpenseComponent  value="input Expense"/>
      }
     
    </Layout>
  );
}

export default ExpensePage;