import ExpenseComponent from "../component/ExpenseComponent.jsx"
import Layout from "../layout/Layout.jsx"

function ExpensePage() {
  return (
    <Layout title="EXPENSE">
      {
        <ExpenseComponent />
      }
     
    </Layout>
  );
}

export default ExpensePage;