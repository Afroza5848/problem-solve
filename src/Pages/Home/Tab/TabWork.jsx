import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from '../../../components/JobCard/JobCard';
import { useLoaderData } from 'react-router-dom';

const TabWork = () => {
    const jobs = useLoaderData();
    console.log(jobs);
    return (
        <div className=''>
            <Tabs>
                <div className='container mx-auto px-6 py-10'>
                    <TabList>
                        <div className='flex justify-center items-start w-1/2 mx-auto'>
                            <Tab>Web Development</Tab>
                            <Tab>Digital Marketing</Tab>
                            <Tab>Graphic Design</Tab>
                        </div>
                    </TabList>

                    <TabPanel>
                        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8'>
                            {
                                jobs.filter(j => j.category === 'Web Development').map(job => <JobCard key={job._id} job={job}
                                ></JobCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8'>
                            {
                                jobs.filter(j => j.category === 'Digital Marketing').map(job => <JobCard key={job._id} job={job}
                                ></JobCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8'>
                            {
                                jobs.filter(j => j.category === 'Graphic Design').map(job => <JobCard key={job._id} job={job}
                                ></JobCard>)
                            }
                        </div>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default TabWork;