'use client';

import 'reactflow/dist/style.css';

// import { getAllRoles } from "@/actions/RoleList";
import { useOrganization } from '@clerk/nextjs';
import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  type Connection,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
} from 'reactflow';

import { getUser } from '@/actions/UserList';

import CustomEdge from './CustomeEdge';
import CustomeNode from './CustomeNode';
import NodeSideBar from './NodeSideBar';
import PaymentCountry from './PaymentCountry';
import PaymentInit from './PaymentInit';
import PaymentProvider from './paymentProvider';
import PaymentProviderSelect from './PaymentProviderSelect';
import { initialEdges, initialNodes } from './workflow.constants';

// import CustomeNode from "./CustomeNode";

const nodeTypes = {
  paymentInit: PaymentInit,
  paymentCountry: PaymentCountry,
  paymentProvider: PaymentProvider,
  paymentProviderSelect: PaymentProviderSelect,
  custom: CustomeNode,
};

const edgeTypes = {
  customEdge: CustomEdge,
};

interface Dragitem {
  icon: JSX.Element; // JSX.Element is the type for a React element
  title: string;
  description: string;
}

const page = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [draggedItem, setDraggedItem] = useState<Dragitem | null>(null);
  const [typeNode, setTypeNode] = useState(null);
  const [dataNode, setDataNode] = useState({});

  const OrgMembersParams = {
    memberships: {
      pageSize: 5,
      keepPreviousData: true,
    },
  };
  const { memberships } = useOrganization(OrgMembersParams);

  // useEffect(()=>{

  // const fetchTest=async()=>{
  //   let userPermEdges: Edge[] = [];
  //   if (memberships && memberships.data) {
  //     for (const mem of memberships.data) {
  //       const {role,permissions,publicUserData}=mem
  //       //  console.log(permissions)
  //       // Find the corresponding user node
  //       const userNode = nodes.find(node => node.id === publicUserData.userId);
  //       //Find the corresponding permiss node

  //        const permNode = nodes.find((node,index) => node.id === permissions[index]);
  //       //const permNodes = permissions.map(perm => nodes.find(node => node.id === perm)).filter(Boolean);

  //       console.log(userNode)
  //       console.log(permNode)

  //       // Check if the user node exists and permissions are present
  //       if (userNode && permissions) {
  //         userPermEdges.push({
  //           id: `${permissions}-${publicUserData.userId}`,
  //           source: userNode.id,
  //           target: permNode.id,
  //           label: 'edge',
  //           type: 'smoothstep',
  //         });
  //       }

  //     }

  //     setEdges((prevEdges) => [...prevEdges, ...userPermEdges]);

  //   }
  // }
  // fetchTest()

  //  return()=> {

  //  }
  // },[memberships?.data])

  useEffect(() => {
    const fetchTest = async () => {
      const userPermEdges = [];
      const permRoleRdges = [];
      if (memberships && memberships.data) {
        for (const mem of memberships.data) {
          const { role, permissions, publicUserData } = mem;

          // Find the corresponding user node
          const userNode = nodes.find(
            (node) => node.id === publicUserData.userId,
          );

          // Find the corresponding permission nodes
          const permNodes = permissions
            .map((perm) => nodes.find((node) => node.id === perm))
            .filter(Boolean);

          // Find the corresponding role
          const roleWithoutPrefix = role.replace('org:', ''); // Remove the prefix
          const capitalizedRole =
            roleWithoutPrefix.charAt(0).toUpperCase() +
            roleWithoutPrefix.slice(1);

          const roleNode = nodes.find((node) => node.id === capitalizedRole);

          // console.log(userNode);
          console.log(nodes);
          console.log(roleNode);
          console.log(capitalizedRole);

          // Check if the user node exists and permissions are present
          if (userNode && permissions && roleNode) {
            // Create edges between the user node and each permission node
            for (const permNode of permNodes) {
              if (roleNode && permNode) {
                permRoleRdges.push({
                  id: `${roleNode.id}-${permNode.id}`, // Unique edge ID
                  source: userNode.id,
                  target: roleNode.id,
                  label: 'role',
                  type: 'smoothstep',
                });
              }
              if (permNode) {
                userPermEdges.push({
                  id: `${permissions}-${publicUserData.userId}-${permNode.id}`, // Unique edge ID
                  source: roleNode.id,
                  target: permNode.id,
                  label: 'edge',
                  type: 'smoothstep',
                });
              }
            }
          }
        }

        setEdges((prevEdges) => [
          ...prevEdges,
          ...userPermEdges,
          ...permRoleRdges,
        ]);
      }
    };

    fetchTest();

    return () => {
      // Clean up function
    };
  }, [memberships?.data]);

  useEffect(() => {
    const fetchPermissions = async () => {
      try {
        const allPermissionsNodes: Node[] = [];

        if (memberships && memberships.data) {
          for (const mem of memberships.data) {
            const permResponse = await mem.permissions;
            const permNodes = permResponse.map((perm, index) => ({
              id: perm,
              position: { x: 300, y: 100 * index },
              data: {
                currency: perm,
                country: 'permissions',
                countryCode: 'GB',
                username: 'Permissions',
              },
              type: 'paymentCountry',
            }));
            allPermissionsNodes.push(...permNodes);
          }
        }

        setNodes((prevNodes) => [...prevNodes, ...allPermissionsNodes]);
      } catch (error) {
        console.error('Error fetching permissions:', error);
      }
    };

    fetchPermissions();

    return () => {
      // Clean up function
    };
  }, [memberships?.data]);

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const allRoleNodes = [];
        // Check if memberships data is available
        // console.log(memberships)
        if (memberships && memberships.data) {
          // console.log("2")
          // Iterate over each membership
          for (const mem of memberships.data) {
            // Fetch roles for each membership
            const rolesResponse = await mem.organization.getRoles();

            // Extract roles from the response
            const roles = rolesResponse.data.map((role) => role.name);
            // console.log(roles)
            // Log roles
            const roleNodes = roles.map((role, index) => ({
              id: role,
              position: { x: 10, y: 100 * index * 2 },
              data: { name: role, username: 'Role' },
              type: 'paymentInit',
            }));

            // Concatenate the converted role nodes with existing nodes
            allRoleNodes.push(...roleNodes);
          }
        }

        return allRoleNodes;
      } catch (error) {
        console.error('Error fetching roles:', error);
      }
    };
    // Call the fetchRole function when the component mounts
    const fetchData = async () => {
      const roleNodesJson = await fetchRole(); // Wait for fetchRole to complete

      if (roleNodesJson) {
        setNodes((prevNodes) => [...prevNodes, ...roleNodesJson]); // Update the state with role nodes
      }
    };
    fetchData();

    // Clean up function to abort fetching if component unmounts
    return () => {
      // Abort any ongoing fetch operation
    };
  }, [memberships?.data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user data from the server action
        const userNodes = await getUser();
        const userNodesJson = JSON.parse(userNodes);

        // Update the state with the fetched user nodes
        setNodes((prevNodes) => [...prevNodes, ...userNodesJson]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();

    // Clean up function to abort fetching if component unmounts
    return () => {
      // Abort any ongoing fetch operation
    };
  }, []);

  const [selectedNodetype, setSelectedNodeType] = useState(null);

  const onElementClick = (event, element) => {
    setSelectedNodeType(element);
  };

  const onDrop = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();

    let newNodeType = '';
    let newData: any = {};
    if (draggedItem?.title === 'User') {
      newNodeType = 'paymentProvider';
      newData = { name: 'User', code: 'Us' };
    } else if (draggedItem?.title === 'Permissions') {
      newNodeType = 'paymentCountry';
      newData = {
        currency: 'login',
        country: 'permissions',
        countryCode: 'GB',
      };
    } else if (draggedItem?.title === 'Role') {
      newNodeType = 'paymentInit';
      newData = { name: 'editor' };
    }

    if (newNodeType) {
      setTypeNode(newNodeType);
      setDataNode(newData);

      const position = Math.random() * 500;
      const newNode = {
        id: String(nodes.length + 1),
        type: typeNode,
        data: dataNode,
        position,
      };
      setNodes((prevElements) => [...prevElements, newNode]);
    }
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
  };

  const handleDragStart = (item: any) => {
    setDraggedItem(item);
  };

  const onConnect = useCallback(
    (params: Connection) => {
      const edge = {
        ...params,
        animated: true,
        id: `${edges.length + 1}`, // Corrected template literal syntax
        type: 'customEdge',
      };
      setEdges((prevEdges) => addEdge(edge, prevEdges));
    },
    [setEdges],
  );

  useEffect(() => {
    // Add event listener to handle click outside editor
    const handleClickOutside = (event: MouseEvent<HTMLDivElement>) => {
      const editor = document.getElementById('react-flow-wrapper');
      if (editor && !editor.contains(event.target)) {
        setSelectedNodeType(null); // Reset selected node type
      }
    };

    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Remove the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // Empty dependency array ensures the effect is only run once

  return (
    <div id="react-flow-wrapper" className="flex h-screen">
      <NodeSideBar
        selectedNodetype={selectedNodetype}
        handleDragStart={handleDragStart}
      />
      <ReactFlow
        data-testid="react-flow-wrapper-id"
        onNodeClick={onElementClick}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default page;
