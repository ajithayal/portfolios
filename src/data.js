/* ════════════════════════════════════════════════════════════
   AJITH A - SENIOR INFRASTRUCTURE & HPC ENGINEER PROFILE DATA
   ════════════════════════════════════════════════════════════ */

export const profile = {
  name: 'Ajith',
  full: 'Ajith A',
  role: 'Senior Infrastructure & HPC Engineer',
  location: 'Chennai, Tamil Nadu, India',
  email: 'ajithlayatech@gmail.com',
  phone: '+91 95663 77557',
  intro: 'I design, build, and automate mission-critical enterprise infrastructure, high-density AlmaLinux/Slurm HPC clusters, VMware disaster recovery, and hybrid clouds.',
  github: 'https://github.com/ajithayal',
  linkedin: 'https://www.linkedin.com/in/ajithcloudtech/',
  resume: 'Ajith_A_Resume.pdf',
  avatar: 'img/faces/ajith.jpg',
}

// Quick stats under your intro
export const heroCounts = [
  { value: '8+', label: 'years experience' },
  { value: 'IIT Delhi', label: 'HPC deployed' },
  { value: '750+', label: 'systems scaled' },
]

export const about = {
  // A fanned stack of photos: click it to shuffle through your roles
  photos: [
    'img/photos/portrait-hero.jpg',
    'img/photos/portrait-seated.jpg',
    'img/photos/portrait-laptop.jpg',
    'img/photos/portrait-smile.jpg',
  ],
  // One role per photo, shown under it (click the stack to cycle)
  roles: [
    'Senior Infrastructure Engineer',
    'HPC Cluster Architect',
    'Disaster Recovery Specialist',
    'Systems Automation Engineer',
  ],
  paragraphs: [
    "Hi! I'm Ajith A, a Senior Infrastructure Engineer with around eight years of hands-on experience across enterprise servers, Linux (AlmaLinux/RHEL), VMware, storage, and High-Performance Computing (HPC).",
    "Currently at Laya Tech Pvt Ltd in Chennai, I deploy mission-critical HPC clusters including the supercomputing implementation for IIT Delhi, engineer automated UPS shutdown telemetry, and manage enterprise data center disaster recovery.",
  ],
  stats: [
    { value: '8+', label: 'Years Hands-on Experience' },
    { value: 'IIT Delhi', label: 'HPC Implementation Completed' },
    { value: '750+', label: 'Systems & Infrastructure Scaled' },
    { value: '600+', label: 'Virtual Machines & SRM DR' },
  ],
}

/* Projects list */
export const projects = [
  {
    title: 'IIT Delhi HPC Supercomputing Cluster',
    tag: 'HPC · Supercomputing',
    visual: 'gauge',
    text: 'Engineered and deployed master/worker AlmaLinux HPC clusters with Slurm Workload Manager, high-speed NFS, OpenMPI, Apache Spark, and optimized GPU/eGPU drivers for scientific computing workloads.',
    tech: ['AlmaLinux', 'Slurm', 'OpenMPI', 'Apache Spark', 'GPU / PCIe', 'NFS'],
    link: 'https://github.com/ajithayal',
    color: '#FFE5D9',
  },
  {
    title: 'Autonomous HPC UPS Graceful Shutdown',
    tag: 'Automation · Power Resilience',
    visual: 'heatmap',
    text: 'Designed an automated power-fail orchestration for live customer HPC environments: evicts running compute jobs gracefully at ~30% UPS battery, powers down nodes at ~20%, and dispatches real-time telemetry alerts.',
    tech: ['Bash', 'PowerShell', 'AlmaLinux', 'SNMP', 'SMTP Alerting'],
    link: 'https://github.com/ajithayal',
    color: '#FFD9CC',
  },
  {
    title: 'TASMAC DC & Trichy DR Production Resilience',
    tag: 'Disaster Recovery · VMware SRM',
    visual: 'gauge',
    text: 'Architected and maintained mission-critical disaster recovery between Chennai Data Center and Trichy DR: VMware Site Recovery Manager (SRM), automated non-disruptive DR drill testing, SAN switch replication, Dell/HP servers, and Veeam Continuous Data Protection guaranteeing RPO < 15 minutes.',
    tech: ['VMware SRM', 'vCenter 7/8', 'SAN Storage', 'Veeam CDP', 'Disaster Recovery', 'Dell PowerEdge'],
    link: 'https://github.com/ajithayal',
    color: '#FFEDE5',
  },
  {
    title: 'BARC & Indian Army Defense Infrastructure',
    tag: 'Defense Infrastructure · Zero-Trust Security',
    visual: 'heatmap',
    text: 'Deployed and hardened high-security, air-gapped enterprise server infrastructure for Bhabha Atomic Research Centre (BARC) and Indian Army facilities. Implemented K7 Enterprise Security offline management console, air-gap policy enforcement, endpoint protection, and 100% compliant offline definition telemetry.',
    tech: ['Air-Gapped Infrastructure', 'K7 Enterprise Console', 'Hardened Linux', 'Endpoint Security', 'Zero-Trust', 'Offline Compliance'],
    link: 'https://github.com/ajithayal',
    color: '#FFE5D9',
  },
  {
    title: 'SunGlow & Soorya Cloud Architectures',
    tag: 'Cloud & Hybrid Networks',
    visual: 'outfit',
    text: 'Designed multi-tier secure cloud architecture on AWS featuring bastion jump hosts and isolated database tiers, alongside Azure healthcare cloud with IPsec site-to-site VPN tunnels.',
    tech: ['AWS VPC', 'Azure', 'IPsec VPN', 'SQL Server', 'Terraform'],
    link: 'https://github.com/ajithayal',
    color: '#FFD9CC',
  },
]

export const journey = [
  {
    year: '2023 – Present',
    title: 'Senior Engineer',
    org: 'Laya Tech Pvt Ltd, Chennai',
    text: 'Deploying AlmaLinux HPC clusters (IIT Delhi), developing autonomous UPS graceful power shutdown, architecting automated HPC node provisioning, and managing OEM server hardware.',
    photo: 'img/photos/portrait-laptop.jpg',
    note: 'HPC & enterprise automation'
  },
  {
    year: '2022 – 2023',
    title: 'System Engineer',
    org: 'CMS IT Services Pvt Ltd, Chennai',
    text: 'Enterprise Dell & HP server administration, VMware ESXi/vCenter/SRM virtualization, Veeam backup replication, Synology/QNAP NAS storage, and site-to-site VPNs.',
    photo: 'img/photos/portrait-seated.jpg',
    note: 'Data Center & DR'
  },
  {
    year: '2020 – 2022',
    title: 'System Engineer',
    org: 'Sanctum Technology Pvt Ltd, Chennai',
    text: 'Lenovo warranty enterprise hardware diagnosis, component replacement coordination, and high-availability customer technical support.',
    photo: 'img/photos/portrait-look.jpg',
    note: 'Hardware diagnostics'
  },
  {
    year: '2017 – 2020',
    title: 'System Engineer',
    org: 'Proteck Machinery Pvt Ltd, Chennai',
    text: 'Managed daily enterprise IT operations for 800+ systems: servers, network security, email backup monitoring, CCTV, and telephony infrastructure.',
    photo: 'img/photos/portrait-hero.jpg',
    note: '800+ systems scaled'
  },
  {
    year: '2017',
    title: 'B.E. Computer Science & Engineering',
    org: 'Bharathidasan Engineering College, Natrampalli',
    text: 'Graduated in Computer Science and Engineering with foundational focus on operating systems, networking, and distributed computing.',
    photo: 'img/photos/portrait-smile.jpg',
    note: 'Graduated B.E. CSE'
  },
]

export const skills = [
  'AlmaLinux', 'RHEL', 'Slurm HPC', 'VMware ESXi', 'vCenter', 'VMware SRM',
  'AWS', 'Azure', 'Docker', 'Kubernetes', 'OpenMPI', 'Apache Spark',
  'Dell PowerEdge', 'HPE ProLiant', 'Hardware RAID', 'iLO / iDRAC',
  'Synology HA', 'QNAP', 'SAN / NAS', 'Veeam Backup', 'Bash Scripting',
  'PowerShell', 'Python', 'Terraform', 'Prometheus', 'Grafana', 'Site-to-Site VPN',
]

// Milestones scoreboard. brand = icon key from src/lib/brands.js
export const scoreboard = [
  { brand: 'dell', label: 'Enterprise Systems', note: 'systems deployed & managed', value: 750, suffix: '+', goal: 800 },
  { brand: 'linux', label: 'HPC Deployments', note: 'supercomputer clusters & nodes', value: 2, suffix: '+', goal: 5 },
  { brand: 'vmware', label: 'Virtual Machines', note: 'VMs & SRM disaster recovery', value: 600, suffix: '+', goal: 700 },
  { brand: 'aws', label: 'Infrastructure Uptime', note: 'high-availability target', value: 99, suffix: '.9%', goal: 100 },
]

export const certifications = [
  ['AWS DevOps Engineer Program', 'GUVI · AWS Certified Track', 'aws'],
  ['Docker for Beginners & Containers', 'DevOps & Containerization', 'docker'],
  ['B.E. Computer Science & Engineering', 'Bharathidasan Engineering College', 'university'],
  ['Diploma in Computer Science & Eng.', 'Guru Raagavindra Polytechnic', 'university'],
  ['Enterprise Linux & HPC Cluster Ops', 'AlmaLinux & Slurm Workload Manager', 'linux'],
  ['VMware vSphere & Enterprise DR', 'Data Center Virtualization & SRM', 'vmware'],
]

// Cut-out frames used by the hero
export const lookFrames = { from: 0, to: 28 }
export const contactSticker = 'img/photos/ajith-full-sticker.png'
