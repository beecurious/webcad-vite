import DashboardIcon from '../assets/icons/DashboardIcon.svg'
import FavoritesIcon from '../assets/icons/FavoritesIcon.svg'
import ProjectsIcon from '../assets/icons/ProjectsIcon.svg'
import MenuIcon from '../assets/icons/MenuIcon.svg'
import DocumentationIcon from '../assets/icons/DocumentsIcon.svg'


import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import { PerspectiveCamera } from 'three';

import React, { SyntheticEvent, Component, useEffect, useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import five from "./assets/five.png"
import SideNavButton from '../components/SideNavButton';

import { useQuery } from "react-query";
import supabase from '../supabaseClient'
import { AuthSession, Session } from '@supabase/supabase-js'
import { Link, useParams } from 'react-router-dom'



function Editor({ session }: AuthSession) {
  const [collapse, setCollapse] = useState(false);
  const [code, setCode] = useState<string | null>(null);
  const { pid } = useParams();


  const { data: projects, status } = useQuery('projectData', async () => {
    const { data: projects, error } = await supabase.from("projects").select("*").eq("project_id", pid)
    if (!error) {
      console.log(projects);
      if (!code) {
        setCode(projects[0].code);
      }
    }
    return projects;
  });


  const handleSave = async () => {
    if(true){
      const { data: projects, error } = await supabase.from('projects').update({ 'code' : code }).eq('project_id', pid)

      console.log("error:", error);
      console.log("data:", projects);
    }
    
  }


  if (!session) {
    return (
      <> <div>
        You are not logged in!
      </div>
        <Link to='/login'> Login </Link> </>
    )
  }
  if (status == 'loading') { return <span className="loader"></span> }

  if (!projects) { return <div> Something went wrong </div> }

  if (status == 'success') {
    return (
      <div className='Editor max-h-screen max-w-screen h-full w-full flex flex-row bg-grey-100 overflow-clip'>
        <div className="SideNav h-full border-solid border-2 border-t-0 w-fit pt-2 flex flex-col items-start transition-all justify-between bg-grey-200">

          <div className="SideNavTop">
            <SideNavButton collapse={collapse} icon={DashboardIcon} text="Code" />
            <SideNavButton collapse={collapse} icon={DocumentationIcon} text="Documentation" />
          </div>
          <div onClick={() => { setCollapse(!collapse) }} className="self-end p-2 hover:text-lilac">{collapse ? ">>" : "<<"}</div>
          <div className="SideNavBottom">
            <SideNavButton collapse={collapse} icon={ProjectsIcon} text="Project Settings" />
            <SideNavButton collapse={collapse} icon={MenuIcon} text="New Project" />
          </div>
        </div>

        <div className='content flex flex-col justify-start align-middle grow'>
          <div className='ToolBar flex flex-row gap-2 p-2 border-solid border-r-2 border-b-2 border-black hover:cursor-pointer text-md font-medium text-grey-700'>
            <div className='hover:bg-grey-400 p-2 rounded-lg font-sans bg-black bg-opacity-5'> Reload </div>
            <div className='hover:bg-grey-400 p-2 rounded-lg font-sans bg-black bg-opacity-5' > Render </div>
            <div className='hover:bg-grey-400 p-2 rounded-lg font-sans bg-black bg-opacity-5'onClick={handleSave}> Save </div>
          </div>

          <div className='flex flex-row grow w-full overflow-hidden'>
            <div className='grow w-1/2 p-2 border-r-2'>
              <textarea value={(!code?"":code)} onChange={(e) => { setCode(e.target.value) }} className='border-2 rounded-lg resize-none w-full h-full p-2' name=" Code Area" id="" cols={30} rows={10}>

              </textarea>
            </div>
            <div className='grow w-full bg-grey-700 h-min'>
              <Renderer />
            </div>

          </div>

        </div>



      </div>
    );
  }

  return (<></>)

}


class Renderer extends Component {

  renderProps: any | {
    width: number,
    height: number,
    PixelRatio: number
  };

  scene: THREE.Scene;
  geometry: any;
  mesh: any;
  camera: THREE.PerspectiveCamera;
  controls: any;
  renderer: THREE.WebGLRenderer;


  // renderer canvas scaling
  renderScale = .66;

  constructor(props: any) {
    super(props)
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.geometry = new THREE.BoxGeometry(1, 1, 1);;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera();
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  }

  componentDidMount(): void {

    // let geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // New Scene
    // const scene = new THREE.Scene()

    // Get canvas element
    const canvas = document.getElementById('renderCanvasPlaceholder');

    // set renderer size
    // this.setCamera();
    this.resizeRenderer();

    // If canvas element exists, replace with webGLrenderer
    if (canvas) {
      canvas.appendChild(this.renderer.domElement);
    }

    // Add Camera Controls
    // const controls = new OrbitControls(this.camera, this.renderer.domElement)
    const animate = () => {
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
      window.requestAnimationFrame(animate);
    }

    this.renderModel(new THREE.BoxGeometry(1, 1, 1));
    animate();
  }


  newScene() {
    this.scene.clear()
    this.scene.background = new THREE.Color(0xe8e8e8)

    // Add ambient ligting
    const light = new THREE.AmbientLight()
    light.position.set(20, 20, 20)
    this.scene.add(light)

    // Generate Grid
    const gridHelper = new THREE.GridHelper(20, 20);
    this.scene.add(gridHelper);
  }

  newGeometry(obj: any) {
    // Create Geometry mesh
    this.geometry = obj;
    const material = new THREE.MeshBasicMaterial({ color: 0xfff3a8 });
    this.mesh = new THREE.Mesh(this.geometry, material);
    this.scene.add(this.mesh);

    // Create wireframe mesh for geometry
    const geomEdges = new THREE.EdgesGeometry(this.mesh.geometry);
    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
    const wireframe = new THREE.LineSegments(geomEdges, edgeMaterial);
    this.scene.add(wireframe);
  }

  renderModel(geom: any) {
    // this.scene = new THREE.Scene()
    this.newScene()
    this.newGeometry(geom)

    this.scene.add(this.mesh);
    this.renderer.render(this.scene, this.camera);

    console.log("Renderer Models Updated")
  }

  setCamera() {
    this.renderProps = {
      width: window.innerWidth * this.renderScale,
      height: window.innerHeight,
      PixelRatio: (window.innerWidth * this.renderScale) / window.innerHeight
    }
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.renderProps.PixelRatio,
      0.1,
      1000
    )

    // Camera starting position
    this.camera.position.z = 4
    this.camera.position.y = 4
    this.camera.position.x = 4
  }

  resizeRenderer() {
    this.setCamera();

    this.renderer.setSize(this.renderProps.width, this.renderProps.height);
    this.renderer.setPixelRatio(this.renderProps.PixelRatio);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    console.log("renderer size refreshed")
  }

  render() {
    return (<div id="renderCanvasPlaceholder" />)
  }
  //elements to render
  // render() {
  //   return (
  //     <div className="Editor flex flex-row w-screen h-screen">
  //       <div>
  //         <div>
  //           <button onClick={() => { this.resizeRenderer() }}> Resize </button>
  //           <button onClick={() => { this.renderModel(new THREE.BoxGeometry(5, 5, 1)) }}> Render </button>
  //           <button onClick={() => { generateModel() }}> test </button>
  //         </div>
  //         <textarea id='editor' placeholder='Write your code here...' defaultValue={`render -> cube("origin", 1);`}>


  //         </textarea>

  //       </div>

  //       <div id="right-side">
  //         <div id="renderCanvasPlaceholder" />
  //       </div>
  //     </div>
  //   )
  // }

}


export default Editor;
