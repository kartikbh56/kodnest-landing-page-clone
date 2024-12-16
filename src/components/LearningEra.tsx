export default function LearningEra() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-emerald-400 text-white px-4 py-2 rounded-md inline-block mb-6">
            The Platform
          </span>
          <h2 className="text-4xl font-bold mb-4">
            Enter the New Era of Learning
          </h2>
          <p className="text-gray-600 mb-16">
            Experience learning by doing with our interactive platform.
          </p>
        </div>

        {/* Seamless Learning Experience */}
        <div className="bg-[#fff3d9] rounded-lg p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Seamless Learning Experience
              </h3>
              <p className="text-gray-700 mb-8">
                Experience learning by doing with our interactive platform.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span>Interactive Exercises: Hands-On Learning</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span>Integrated Testing: Continuous Assessments</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span>Practical Skills: Real-World Applications</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span>Progress Tracking: Monitor Improvement</span>
                </li>
              </ul>
            </div>
            <div className="bg-black rounded-lg overflow-hidden">
              <div className="bg-[#1e1e1e] p-3 flex items-center gap-2">
                <span className="text-yellow-400 font-bold">K</span>
                <span className="text-gray-300">Write your Code here</span>
              </div>
              <div className="p-4 font-mono text-sm">
                <div className="flex items-center text-gray-400">
                  <span className="mr-4">1</span>
                  <span className="text-blue-400">console</span>
                  <span className="text-white">.</span>
                  <span className="text-yellow-400">log</span>
                  <span className="text-white">(</span>
                  <span className="text-orange-400">&quot;Hello, Welcome to KodNest!&quot;</span>
                  <span className="text-white">);</span>
                </div>
              </div>
              <div className="bg-[#1e1e1e] p-2 flex justify-end">
                <button className="bg-yellow-400 text-black px-4 py-1 rounded text-sm font-medium">
                  Run
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* AI-Driven Mentorship */}
        <div className="bg-[#fff1f1] rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-[#0f1025] rounded-lg shadow-2xl overflow-hidden">
              <div className="bg-[#0f1025] p-3 flex items-center justify-between border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center">
                    <span className="text-white/80 text-xs">AI</span>
                  </div>
                  <span className="text-white/80 text-sm">AI Learning Assistant</span>
                </div>
                <button className="text-white/60 hover:text-white/80">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-4 space-y-4">
                <div className="bg-[#1a1b35] rounded p-3 text-white/80">
                  <p>Why doesn&apos;t my code work?</p>
                </div>
                <div className="text-white/80 space-y-3">
                  <p className="text-sm leading-relaxed">
                    In your code, there&apos;s a small mistake in the condition of the outer loop. You&apos;re using the array <span className="bg-[#2a2b45] px-1 rounded">Followers</span> directly in the condition, instead of its length. By adding <span className="bg-[#2a2b45] px-1 rounded">length</span> to <span className="bg-[#2a2b45] px-1 rounded">Followers</span>, you ensure that the loop iterates correctly over the array. Here&apos;s the corrected line:
                  </p>
                  <div className="bg-[#0f1025] rounded p-3 font-mono text-sm border border-gray-800">
                    <span className="text-gray-500">for</span> (<span className="text-purple-400">let</span> i = <span className="text-orange-400">0</span>; i &lt; Followers.length; i++)
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-6">
                24x7 AI-Driven Mentorship
              </h3>
              <p className="text-gray-700 mb-8">
                Our AI Learning Assistant offers instant, personalized coding guidance seamlessly integrated into your courses. Get immediate help with coding problems, verify your solutions, and receive explanations of errors and concepts within seconds — all without leaving the platform.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-emerald-400 text-xl">↻</span>
                  <span>Real-Time Feedback: Immediate Guidance</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-400 text-xl">⬚</span>
                  <span>Mentor Interaction: Human-Like Assistance</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-400 text-xl">↑</span>
                  <span>Receive project hints without full solutions.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-400 text-xl">◌</span>
                  <span>Simulate real interviews and receive feedback.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 