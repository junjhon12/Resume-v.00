import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const RepoGallery = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Replace this with YOUR GitHub username!
  const username = 'junjhon12'; 

  useEffect(() => {
      const fetchRepos = async () => {
        try {
          const response = await fetch(`https://api.github.com/users/${username}/starred?sort=updated`);
          const data = await response.json();
          
          if (Array.isArray(data)) {
            // SAFETY CHECK: specifically look for repos owned by YOU (junjhon12)
            const myFeaturedRepos = data.filter(repo => 
              repo.owner.login.toLowerCase() === username.toLowerCase()
            );
            setRepos(myFeaturedRepos);
          }
        } catch (error) {
          console.error("Github API Error:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchRepos();
    }, []);

    if (loading) {
      return <p style={{ padding: '20px', fontStyle: 'italic' }}>LOADING_DATA...</p>;
    }
    if (!loading && repos.length === 0) {
      return <p style={{ padding: '20px', fontStyle: 'italic' }}>No featured projects found.</p>;
    }
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      
      {/* THE LOOP: Turn every Repo into a Card */}
      {repos.map((repo) => (
        <ProjectCard 
          key={repo.id} // React always needs a unique Key
          title={repo.name.replace(/[-_]/g, " ")} 
          
          // If description is null (empty), we provide a fallback text
          description={repo.description 
            ? (repo.description.length > 100 ? repo.description.substring(0, 100) + "..." : repo.description)
            : "No description provided."} 
          
          // GitHub doesn't give images easily, so we use a placeholder or a random image service
          image={`https://placehold.co/600x400/ff6b6b/white?text=${repo.language || 'Code'}`}
          
          link={repo.html_url}
          download={repo.html_url ? `${repo.html_url}/archive/HEAD.zip` : "#"}
        />
      ))}
      
    </div>
  );
};

export default RepoGallery;