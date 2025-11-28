'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import {
  Cloud,
  Cpu,
  Settings,
  Container,
  Boxes,
  Code,
  ShieldCheck,
  Network,
  Server,
} from 'lucide-react'

const skills = [
  {
    title: 'Cloud Platforms',
    icon: <Cloud className="w-8 h-8 text-primary" />,
    items: ['AWS', 'Azure', 'GCP (Basics)'],
  },
  {
    title: 'Containers & Orchestration',
    icon: <Container className="w-8 h-8 text-primary" />,
    items: ['Docker', 'Kubernetes (EKS / AKS)', 'Helm', 'Container Security'],
  },
  {
    title: 'Infrastructure as Code',
    icon: <Settings className="w-8 h-8 text-primary" />,
    items: ['Terraform', 'CloudFormation', 'ARM Templates', 'Ansible'],
  },
  {
    title: 'CI/CD Pipelines',
    icon: <Cpu className="w-8 h-8 text-primary" />,
    items: ['GitHub Actions', 'Azure DevOps', 'Jenkins', 'GitLab CI/CD'],
  },
  {
    title: 'Monitoring & Logging',
    icon: <Boxes className="w-8 h-8 text-primary" />,
    items: ['Prometheus', 'Grafana', 'ELK Stack', 'CloudWatch', 'Loki'],
  },
  {
    title: 'Scripting & Automation',
    icon: <Code className="w-8 h-8 text-primary" />,
    items: ['Python', 'Bash', 'YAML', 'Linux Administration'],
  },
  {
    title: 'Security & DevSecOps',
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    items: ['GitOps', 'Image Scanning (Trivy)', 'Secrets Mgmt', 'Policy as Code'],
  },
  {
    title: 'Networking & Load Balancing',
    icon: <Network className="w-8 h-8 text-primary" />,
    items: ['VPC', 'Subnets', 'Load Balancers', 'DNS', 'Firewalls', 'Ingress / Egress'],
  },
  {
    title: 'Compute & Serverless',
    icon: <Server className="w-8 h-8 text-primary" />,
    items: ['EC2', 'Fargate', 'Lambda', 'Azure Functions'],
  },
]

const SkillText = () => {
  return (
    <section id="skills" className="w-full py-20">
      <motion.div variants={slideInFromTop} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
          Technical Skills
        </h1>
        <p className="text-gray-300 mt-3 text-lg max-w-2xl mx-auto">
          Tools & technologies I use daily to build secure, scalable, production-grade DevOps infrastructure.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid
