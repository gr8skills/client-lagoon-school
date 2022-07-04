
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Backdrop from "../../../../Assets/Backdrop.png";
import { subRoute } from "./Acaitems";
import Holder from "../../../../Assets/ExplaoreTwo.png";
import "./fullCalendar.css";
import { api } from "../../../../misc/api";

export default function AcademicFacilities() {
  const currentPath = window.location.pathname;
  const [pageData, setPageData] = useState("");
  const [imgList, setImgList] = useState([]);
  const [noteData, setNoteData] = useState({});

  const fetchPageData = () => {
    api
      .get("facility-index")
      .then((res) => {
        const abridgePageData = res.data;
        console.log(abridgePageData);
        setPageData(abridgePageData);
      })
      .catch(console.log);
  };
  useEffect(() => {
    fetchPageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (pageData !== "") {
      setImgList(pageData.images);
      setNoteData(pageData.note);
    }
  }, [pageData]);

    const [pageData, setData] = useState('');
    const fetchData = () => {
        api.get('academics/facilities')
            .then(res => {
                const abridgeData = res.data;
                setData(abridgeData);
            })
            .catch(console.log);

    };
    useEffect(() => {
        fetchData();
    }, []);
    console.log(pageData);
    let f1Image = null;
    pageData?.other_images_1 ? f1Image=`${process.env.REACT_APP_SERVER_URL}/images/${pageData?.other_images_1}` : f1Image=Holder;
    let f2Image = null;
    pageData?.other_images_2 ? f2Image=`${process.env.REACT_APP_SERVER_URL}/images/${pageData?.other_images_2}` : f2Image=Holder;
    let f3Image = null;
    pageData?.other_images_3 ? f3Image=`${process.env.REACT_APP_SERVER_URL}/images/${pageData?.other_images_3}` : f3Image=Holder;
    let f4Image = null;
    pageData?.other_images_4 ? f4Image=`${process.env.REACT_APP_SERVER_URL}/images/${pageData?.other_images_4}` : f4Image=Holder;
    let f5Image = null;
    pageData?.other_images_5 ? f5Image=`${process.env.REACT_APP_SERVER_URL}/images/${pageData?.other_images_5}` : f5Image=Holder;
    let f6Image = null;
    pageData?.other_contents_1 ? f6Image=`${process.env.REACT_APP_SERVER_URL}/images/${pageData?.other_contents_1}` : f6Image=Holder;
    let f7Image = null;
    pageData?.other_contents_2 ? f7Image=`${process.env.REACT_APP_SERVER_URL}/images/${pageData?.other_contents_2}` : f7Image=Holder;
    let f8Image = null;
    pageData?.other_contents_3 ? f8Image=`${process.env.REACT_APP_SERVER_URL}/images/${pageData?.other_contents_3}` : f8Image=Holder;
    let f9Image = null;
    pageData?.other_contents_4 ? f9Image=`${process.env.REACT_APP_SERVER_URL}/images/${pageData?.other_contents_4}` : f9Image=Holder;
    let f10Image = null;
    pageData?.other_contents_5 ? f10Image=`${process.env.REACT_APP_SERVER_URL}/images/${pageData?.other_contents_5}` : f10Image=Holder;
    let f11Image = null;
    pageData?.other_contents_6 ? f11Image=`${process.env.REACT_APP_SERVER_URL}/images/${pageData?.other_contents_6}` : f11Image=Holder;
    let f12Image = null;
    pageData?.other_titles_2 ? f12Image=`${process.env.REACT_APP_SERVER_URL}/images/${pageData?.other_titles_2}` : f12Image=Holder;

  let fac1 = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url(${f1Image})`
  };
  let fac2 = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url(${f2Image})`
  };
  let fac3 = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url(${f3Image})`
  };
  let fac4 = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url(${f4Image})`
  };
  let fac5 = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url(${f5Image})`
  };
  let fac6 = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url(${f6Image})`
  };
  let fac7 = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url(${f7Image})`
  };
  let fac8 = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url(${f8Image})`
  };
  let fac9 = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url(${f9Image})`
  };
  let fac10 = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url(${f10Image})`
  };
  let fac11 = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url(${f11Image})`
  };
  let fac12 = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url(${f12Image})`
  };

  return (
    <Container props={pageData}>
      <div className="placeholder2">
        <img
          src={
            `${process.env.REACT_APP_SERVER_URL}/images/${noteData.banner}` ??
            Backdrop
          }
          alt="placeholder"
        />
        <div className="overlay">
          <ul>
            {subRoute?.map((sub, idx) => {
              return (
                <li key={idx}>
                  <a
                    className={sub.cName}
                    href={sub.path}
                    style={{
                      color:
                        sub.path.toString() === currentPath.toString()
                          ? "red"
                          : "",
                      backgroundColor:
                        sub.path.toString() === currentPath.toString()
                          ? "#fff"
                          : "",
                      padding:
                        sub.path.toString() === currentPath.toString()
                          ? "20px"
                          : "",
                      border:
                        sub.path.toString() === currentPath.toString()
                          ? "2px solid red"
                          : "",
                      borderRadius:
                        sub.path.toString() === currentPath.toString()
                          ? "20px"
                          : "",
                    }}
                  >
                    {sub.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="content">
        <div className="first">
          <span>
            <h2>{pageData?.other_titles_1}</h2>
          </span>

          <h4>
            <span
              dangerouslySetInnerHTML={{ __html: noteData?.content }}
            ></span>
          </h4>
        </div>
        <div className="conimages">
          {imgList.map(({ id, title, image_path }) => {
            return (
              <div
                style={{
                  backgroundImage: `url(${process.env.REACT_APP_SERVER_URL}/images/${image_path})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h4>{title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  .placeholder2 {
    height: 37rem;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .overlay {
      position: absolute;
      top: 0;
      background-color: rgba(0, 0, 0, 0.5);
      width: 100%;
      height: 100%;
      ul {
        padding: 0;
        list-style: none;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2rem;
        /* height:100% ; */
        align-items: center;
        position: absolute;
        bottom: 30%;
        width: 100% !important;
        li {
          display: flex;
          flex-direction: column;
          /* height:70% ; */
          align-items: baseline;
          justify-content: flex-end;

          a {
            text-decoration: none;
            font-size: 1.5rem;
            color: #fff;

            &:hover {
              color: red;
            }
          }
        }
      }
    }
  }

  .content {
    width: 90%;
    margin: 5rem auto 0 auto;
    display: flex;
    flex-direction: column;

    .first {
      span {
        h2 {
          position: relative;
          font-size: 1.6rem;

          &::before {
            content: "";
            border-bottom: 5px solid red;
            width: 5rem;
            position: absolute;
            bottom: 0;
            top: 30px;
          }
        }
      }
      h4 {
        font-size: 1.4rem;
        line-height: 25px;
        letter-spacing: 1px;
        font-weight: 500;
        font-weight: 900;
      }
      button {
        width: 100%;
        /* height:4rem ; */
        font-size: 1.2rem;
        padding: 10px;
        background-color: white;
        border: 2px solid red;
        color: red;
      }
    }

    .conimages {
      display: grid;
      grid-template-columns: repeat(3, 20rem);
      gap: 5rem;
      justify-content: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
