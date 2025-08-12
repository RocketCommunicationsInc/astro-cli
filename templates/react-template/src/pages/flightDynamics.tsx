import React, { useState } from 'react'
import {
  RuxClassificationMarking,
  RuxStatus,
  RuxClock,
  RuxIcon,
  RuxTabs,
  RuxTab,
  RuxInput,
  RuxButton,
  RuxContainer
} from '@astrouxds/react'
import { colors } from '../tokens'

const FlightDynamics: React.FC = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)
  const [activeView, setActiveView] = useState('orbit-determination')
  const [activeTab, setActiveTab] = useState(0) // 0 = New OD Run, 1 = History
  const [searchQuery, setSearchQuery] = useState('')
  const [odRuns, setOdRuns] = useState([
    {
      sv: 12345,
      name: 'JDay100_1',
      timestamp: '2025-06-19 10:30:15',
    },
    {
      sv: 23456,
      name: 'JDay101_2',
      timestamp: '2025-06-19 11:45:32',
    },
    {
      sv: 34567,
      name: 'JDay102_3',
      timestamp: '2025-06-19 09:15:28',
    }
  ])

  const toggleNav = () => {
    setIsNavCollapsed(!isNavCollapsed)
  }

  const handleCreateNewRun = () => {
    const newRun = {
      sv: Math.floor(Math.random() * 90000) + 10000, // Random 5-digit SV number
      name: `JDay${100 + odRuns.length + 1}_${odRuns.length + 1}`,
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19)
    }
    setOdRuns([newRun, ...odRuns])
  }

  const filteredRuns = odRuns.filter(run => 
    run.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    run.sv.toString().includes(searchQuery.toLowerCase())
  )

  // Content renderer based on active view
  const renderContent = () => {
    switch (activeView) {
      case 'orbit-determination':
        return (
          <div style={{ padding: '20px' }}>
            {/* Tabs above the entire bordered section */}
            <RuxTabs style={{ marginBottom: '4px' }}>
              <RuxTab 
                small 
                selected={activeTab === 0}
                onClick={() => setActiveTab(0)}
              >
                <RuxIcon icon="create-new-folder" size="1.25rem" style={{ paddingRight: '8px' }} />
                New OD Run
              </RuxTab>
              <RuxTab 
                small 
                selected={activeTab === 1}
                onClick={() => setActiveTab(1)}
              >
                <RuxIcon icon="list" size="1.25rem" style={{ paddingRight: '8px' }} />
                History
              </RuxTab>
            </RuxTabs>

            {/* Single container for both OD runs and right section */}
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              minHeight: '500px',
              backgroundColor: colors.background.surface,
              borderRadius: '4px',
              border: `1px solid ${colors.border.default}`,
              overflow: 'hidden'
            }}>
              {/* Left Section - OD Runs Management */}
              <div style={{ 
                width: '400px', 
                flexShrink: 0,
                display: 'flex', 
                flexDirection: 'column',
                height: 'fit-content',
                borderRight: `1px solid ${colors.border.default}`,
                backgroundColor: colors.background.surface,
                padding: '20px'
              }}>

              {/* Bordered section with dynamic content based on selected tab */}
              <div style={{
                backgroundColor: 'transparent',
                borderRadius: '0',
                border: 'none',
                overflow: 'hidden',
                marginTop: '4px',
                minHeight: '400px'  /* Fixed height instead of flex: 1 */
              }}>
                <div style={{ padding: '20px' }}>
                  {/* Always show some content for debugging */}
                  {activeTab === 0 && (
                    <div>
                      <h3 style={{ color: colors.text.primary, marginBottom: '15px' }}>
                        New OD Run
                      </h3>
                      
                      {/* Search and Create Section */}
                      <div style={{ 
                        display: 'flex', 
                        gap: '12px', 
                        marginBottom: '20px',
                        alignItems: 'center'
                      }}>
                        <div style={{ flex: 1 }}>
                          <RuxInput 
                            placeholder="Search runs..."
                            value={searchQuery}
                            onRuxinput={(e: any) => setSearchQuery(e.target.value)}
                            size="small"
                          />
                        </div>
                        <RuxButton 
                          size="small"
                          onClick={handleCreateNewRun}
                        >
                          Create New
                        </RuxButton>
                      </div>

                      {/* Runs List */}
                      <div style={{ 
                        height: '300px', 
                        overflowY: 'auto',
                        border: `1px solid ${colors.border.default}`,
                        borderRadius: '4px'
                      }}>
                        {filteredRuns.length === 0 ? (
                          <div style={{ 
                            padding: '20px', 
                            textAlign: 'center',
                            color: colors.text.secondary 
                          }}>
                            No runs found
                          </div>
                        ) : (
                          filteredRuns.map((run) => (
                            <div 
                              key={run.sv}
                              style={{
                                padding: '12px 16px',
                                borderBottom: `1px solid ${colors.border.muted}`,
                                cursor: 'pointer',
                                transition: 'background-color 0.2s ease',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                              }}
                              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.background.card}
                              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                              {/* Left side - Name, SV, and Timestamp */}
                              <div style={{ flex: 1 }}>
                                <div style={{ 
                                  color: colors.text.primary,
                                  fontSize: '14px',
                                  fontWeight: '600',
                                  marginBottom: '4px'
                                }}>
                                  {run.name}
                                </div>
                                <div style={{ 
                                  fontSize: '12px',
                                  color: colors.text.secondary,
                                  marginBottom: '2px'
                                }}>
                                  SV: {run.sv}
                                </div>
                                <div style={{ 
                                  fontSize: '12px',
                                  color: colors.text.secondary
                                }}>
                                  {run.timestamp}
                                </div>
                              </div>
                              
                              {/* Right side - Two icons */}
                              <div style={{ 
                                display: 'flex', 
                                gap: '8px',
                                alignItems: 'center'
                              }}>
                                <RuxIcon 
                                  icon="repeat" 
                                  size="extra-small" 
                                  style={{ cursor: 'pointer', color: colors.text.secondary }}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    console.log('Repeat run:', run.name);
                                  }}
                                />
                                <RuxIcon 
                                  icon="close" 
                                  size="extra-small" 
                                  style={{ cursor: 'pointer', color: colors.text.secondary }}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setOdRuns(odRuns.filter(item => item.sv !== run.sv));
                                  }}
                                />
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 1 && (
                    <div>
                      <h3 style={{ color: colors.text.primary, marginBottom: '15px' }}>
                        Historical OD Runs
                      </h3>
                      <p style={{ color: colors.text.secondary, fontSize: '14px' }}>
                        View completed orbit determination runs and their results.
                      </p>
                      <div style={{ 
                        marginTop: '20px',
                        padding: '20px',
                        backgroundColor: colors.background.dark,
                        borderRadius: '4px',
                        textAlign: 'center'
                      }}>
                        <span style={{ color: colors.text.secondary }}>
                          Historical data visualization coming soon...
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div style={{ 
              flex: 1,
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.background.surface,
              padding: '20px'
            }}>
              <div style={{ textAlign: 'center', color: colors.text.secondary }}>
                <RuxIcon icon="satellite" size="small" style={{ marginBottom: '16px' }} />
                <h3 style={{ color: colors.text.primary, marginBottom: '8px' }}>
                  Select or Create an OD Run
                </h3>
                <p>Choose an existing run from the left panel or create a new one to get started.</p>
              </div>
            </div>
            </div>
          </div>
        )
      
      case 'orbit-propagation':
        return (
          <div style={{ padding: '20px' }}>
            <h2 style={{ color: colors.text.primary, marginBottom: '20px' }}>
              Orbit Propagation
            </h2>
          </div>
        )
      
      case 'conjunction-assessment':
        return (
          <div style={{ padding: '20px' }}>
            <h2 style={{ color: colors.text.primary, marginBottom: '20px' }}>
              Conjunction Assessment
            </h2>
          </div>
        )
      
      default:
        return (
          <div style={{ padding: '20px' }}>
            <div style={{ 
              color: colors.text.secondary,
              textAlign: 'center',
              marginTop: '40px'
            }}>
              <p>Select a navigation item to view content.</p>
            </div>
          </div>
        )
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.background.dark }}>
      {/* Single Classification Banner */}
      <RuxClassificationMarking classification="unclassified" />
      
      {/* Custom Slim Status Bar */}
      <div style={{ 
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.background.surface,
        padding: '0 20px',
        height: '44px',
        borderBottom: `1px solid ${colors.border.default}`,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        {/* Left side: Status icon and title */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px'
        }}>
          <RuxIcon icon="apps" size="small" />
          <span style={{ 
            color: colors.text.primary,
            fontSize: '15px',
            fontWeight: '500',
            letterSpacing: '0.025em'
          }}>
            <span style={{ fontWeight: '700' }}>Rocket</span> Flight Dynamics
          </span>
        </div>
        
        {/* Center: Clock - absolutely positioned to center on screen */}
        <div style={{ 
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          color: colors.text.primary,
          fontSize: '14px',
          fontFamily: 'monospace',
          fontWeight: '400'
        }}>
          <RuxClock hideLabels small/>
        </div>
        
      </div>

      {/* Main Layout Area with Left Nav and Content */}
      <div style={{ display: 'flex', height: 'calc(100vh - 88px)' }}>
        {/* Left Navigation */}
        <div style={{
          width: isNavCollapsed ? '60px' : '200px',
          backgroundColor: colors.background.surface,
          borderRight: `1px solid ${colors.border.default}`,
          display: 'flex',
          flexDirection: 'column',
          transition: 'width 0.3s ease',
          position: 'relative',
          zIndex: 10
        }}>
          {/* Top Navigation Icons */}
        <div style={{ 
          padding: '20px 0',
          borderBottom: `1px solid ${colors.border.default}`
        }}>
          {          /* Navigation Item 1 */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px 20px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            backgroundColor: activeView === 'orbit-determination' ? '#2d3643' : 'transparent',
            borderLeft: activeView === 'orbit-determination' ? '4px solid #4dacff' : '4px solid transparent',
            position: 'relative'
          }}
          onClick={() => setActiveView('orbit-determination')}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2d3643'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activeView === 'orbit-determination' ? '#2d3643' : 'transparent'}
          >
            <RuxIcon icon="satellite" size="extra-small" />
            {!isNavCollapsed && (
              <span style={{
                marginLeft: '12px',
                color: colors.text.primary,
                fontSize: '14px',
                fontWeight: activeView === 'orbit-determination' ? '600' : '500'
              }}>
                Orbit Determination
              </span>
            )}
          </div>

          {          /* Navigation Item 2 */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px 20px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            backgroundColor: activeView === '' ? '#2d3643' : 'transparent',
            borderLeft: activeView === 'orbit-propagation' ? '4px solid #4dacff' : '4px solid transparent',
            position: 'relative'
          }}
          onClick={() => setActiveView('orbit-propagation')}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2d3643'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activeView === 'trajectory-analysis' ? '#2d3643' : 'transparent'}
          >
            <RuxIcon icon="timeline" size="extra-small" />
            {!isNavCollapsed && (
              <span style={{
                marginLeft: '12px',
                color: colors.text.primary,
                fontSize: '14px',
                fontWeight: activeView === 'orbit-propagation' ? '600' : '500'
              }}>
                Orbit Propagation
              </span>
            )}
          </div>

          {          /* Navigation Item 3 */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px 20px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            backgroundColor: activeView === 'conjunction-assessment' ? '#2d3643' : 'transparent',
            borderLeft: activeView === 'conjunction-assessment' ? '4px solid #4dacff' : '4px solid transparent',
            position: 'relative'
          }}
          onClick={() => setActiveView('conjunction-assessment')}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2d3643'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = activeView === 'maneuver-planning' ? '#2d3643' : 'transparent'}
          >
            <RuxIcon icon="launch" size="extra-small" />
            {!isNavCollapsed && (
              <span style={{
                marginLeft: '12px',
                color: colors.text.primary,
                fontSize: '14px',
                fontWeight: activeView === 'conjunction-assessment' ? '600' : '500'
              }}>
                Conjunction Assessment
              </span>
            )}
          </div>
        </div>

        {/* Spacer to push bottom items down */}
        <div style={{ flex: 1 }} />

        {/* Bottom Navigation Icons */}
        <div style={{ 
          padding: '20px 0',
          borderTop: `1px solid ${colors.border.default}`
        }}>
          {          /* Sign Out */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px 20px',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2d3643'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <RuxIcon icon="power-settings-new" size="extra-small" />
            {!isNavCollapsed && (
              <span style={{
                marginLeft: '12px',
                color: colors.text.secondary,
                fontSize: '14px',
                fontWeight: '500'
              }}>
                Sign Out
              </span>
            )}
          </div>

          {          /* Collapse/Expand Toggle */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px 20px',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
          }}
          onClick={toggleNav}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2d3643'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <RuxIcon 
              icon={isNavCollapsed ? "keyboard-tab" : "keyboard-tab"} 
              size="extra-small" 
              style={{ 
                transform: isNavCollapsed ? 'rotate(0deg)' : 'rotate(180deg)',
                transition: 'transform 0.3s ease'
              }} 
            />
            {!isNavCollapsed && (
              <span style={{
                marginLeft: '12px',
                fontSize: '14px',
                fontWeight: '500'
              }}>
                Collapse
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Dynamic content based on selected navigation item */}
        <div style={{ flex: 1, overflow: 'auto' }}>
          {renderContent()}
        </div>
      </div>
      </div>
      
      {/* Bottom Classification Banner */}
      <RuxClassificationMarking classification="unclassified" />
    </div>
  )
}

export default FlightDynamics
