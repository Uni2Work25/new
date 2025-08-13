import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Mail, Brain } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-dark-navy via-darker to-dark-navy flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <div className="w-24 h-24 bg-gradient-to-r from-blue-accent to-purple-accent rounded-full flex items-center justify-center mx-auto">
            <Zap className="w-12 h-12 text-white" />
          </div>
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-4 border-transparent border-t-blue-accent rounded-full"
          />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-white mb-4"
        >
          Harshit Aggarwal
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-blue-accent text-lg"
        >
          AI Email Marketing Expert
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center space-x-4 mt-8"
        >
          {[Mail, Brain, Zap].map((Icon, index) => (
            <motion.div
              key={index}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                delay: index * 0.2,
                ease: "easeInOut"
              }}
              className="w-8 h-8 bg-blue-accent/20 rounded-lg flex items-center justify-center"
            >
              <Icon className="w-4 h-4 text-blue-accent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}