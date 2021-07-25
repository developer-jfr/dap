import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getFilesThunk, getTags, setDappletsThunk } from "../../redux/actions/action";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import drag from './../../images/drag.svg'
import "./Dapletts.css";
import SearchForm from "./DappletsSearchForm";
import { setIsFetcing, setCurrentPageAC } from "./../../redux/actions/action";
import { Button } from "@material-ui/core";
import x from './../../images/x.svg';

const installedApp = localStorage.getItem('installed')

const Dapplets = ({clicked}) => {
  
 const image = [];
 console.log(image)
  const dispatch = useDispatch();
  const dapplets = useSelector(state => state.dapplets.dapplets)
  const currentPage = useSelector((state) => state.dapplets.currentPage);
  const isFetching = useSelector(state => state.dapplets.isFetching)
  
  useEffect(() => {
   
    if(isFetching) {
      dispatch(setDappletsThunk());
    }
    dispatch(getTags());
  }, [isFetching]);

  const installed = "INSTALLED";
  const onClickedChanged = () => {
    setTimeout(() => {
      localStorage.setItem("installed", installed);
    }, 5000);
  };

  

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {
        document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const scrollHandler = (e) => {
      if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
        dispatch(setDappletsThunk(currentPage))
      }
  }
  

  return (
    <div className="dapplets__wrapp">
      <div className="dapplets__container">
        <SearchForm />
        <div className="dapletts__content">
          <DragDropContext
            onDragEnd={(param) => {
              const srcI = param.source.index;
              const desI = param.destination.index;
              dapplets.splice(desI, 0, dapplets.splice(srcI, 1)[0]);
            }}
          >
            <Droppable droppableId="dapplets">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {dapplets
                    .filter((e) => {
                      return e;
                    })
                    .map((dap, index) => (
                      <Draggable
                        key={dap.id}
                        draggableId={dap.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="dapplets__dap"
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <div className="dap__wrap" key={dap.id}>
                              <div className="dap__container">
                                <div className="dap__drag">
                                  <img src={drag} />
                                </div>
                                <div className="dap__image">
                                  <img src={dap.icon} />
                                </div>
                                <div className="dap__author">
                                  <span>{dap.author}</span>
                                  <p>{dap.text_2}</p>
                                </div>
                                <div className="dap__desc">
                                  <span>{dap.description}</span>
                                </div>
                                <div className="dap_title">
                                  <p>{dap.title}</p>
                                </div>
                                <div className="dap_tags">
                                  {dap.tags.map((tag) => (
                                    <div className="dap__tag">
                                      {tag}
                                      <img src={x} />
                                    </div>
                                  ))}
                                </div>
                                <div className="dap__btn">
                                  <button
                                    onClick={onClickedChanged}
                                    className="dap_btnIn"
                                  >
                                    {installedApp ? "Uninstall" : "Install"}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
      <div></div>
    </div>
  );
};



export default Dapplets;
