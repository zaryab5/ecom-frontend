import AnalyticsNav from "../../components/admin-components/Analytics/AnalyticsNav"
import AnalyticsBody from "../../components/admin-components/Analytics/AnalyticsBody"
const Analytics = () => {
  return (
    <div className=" w-full">
        <AnalyticsNav/>
        <main className=" mx-auto p-5">
            <AnalyticsBody/>
        </main>
    </div>
  )
}

export default Analytics