import React, { useEffect, useState } from 'react';
import Layout from '../reusable/Layout';
import Breadcrumb from '../reusable/Breadcrumb';
import termsArray from '../ArrayFiles/termsArray';
import { useParams } from 'react-router-dom';
import ErrorPage from '../../ErrorPage';
// import terms from '../../assest/css/terms.css';
import TearmQus from "./Terms.json";

const TermsPage = () =>
{
  const [TermContent, settermContent] = useState([]);
  useEffect(() =>
  {
    settermContent(TearmQus);
  }, []);
  console.log(TermContent);


  const { link } = useParams();
  const matchingTerm = termsArray.find((ele) => link === ele.link);
  if (!matchingTerm)
  {
    return <ErrorPage />;
  }

  return (
    <>
      <Layout>
        <Breadcrumb pageHeader="Our Terms" />
        <div className='container mb-4'>
          <div class="mt-4"><h2 class="main_heading_title centerterm">Terms and Conditions</h2></div>
          <div className="card maxcard">
            <div class="accordion accordion-flush" id="accordionFlushExample">

              {
                TermContent.map((qusItems) => (
                  <div class="accordion-item" key={qusItems.id}>
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={qusItems.dataBsTarget} aria-expanded="false" aria-controls={qusItems.ariaControls}>
                        {qusItems.qus}
                      </button>
                    </h2>
                    <div id={qusItems.AnsId} class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div class="accordion-body">
                        {qusItems.Ans}
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          {
            // <div className='row'>
            //   <div className='col-md-12 full-box'>
            //     <div className='fir-box'>
            //       <h1 class="service_title mt-5">{matchingTerm.title}</h1>
            //       <p>{matchingTerm.cont}</p>
            //     </div>
            //     <div className='sec-box mb-5'>
            //       <h3 class="service_title">{matchingTerm.head1}</h3>
            //       <p>{matchingTerm.p1}</p>
            //       <h3 class="service_title">{matchingTerm.head2}</h3>
            //       <p>{matchingTerm.p2}</p>
            //     </div>
            //   </div>
            // </div>

          }

        </div>
      </Layout>

    </>
  );
};

export default TermsPage;
